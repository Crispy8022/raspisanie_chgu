let currentFullscreenImage2 = null;

        document.querySelectorAll('.photo-input').forEach(input => input.addEventListener('change', handleFileSelect));

        const savedImages2 = JSON.parse(localStorage.getItem('savedImages2')) || [];
        savedImages2.forEach(image => displayImage(image.url, image.size, image.gallery));

        if (currentFullscreenImage2) openFullscreen2(currentFullscreenImage2);

        updateTotalSize2();
        updatePhotoCount2();

        function handleFileSelect(event) {
            const files = event.target.files;
            const containerId = event.target.id.replace('photo-input', 'gallery');

            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const reader = new FileReader();

                reader.onload = function (e) {
                    const imageUrl = e.target.result;
                    const tempImg = new Image();
                    tempImg.src = imageUrl;

                    tempImg.onload = function () {
                        const maxWidth = 700;
                        const maxHeight = 700;

                        let newWidth = tempImg.width;
                        let newHeight = tempImg.height;

                        if (tempImg.width > maxWidth || tempImg.height > maxHeight) {
                            const aspectRatio = tempImg.width / tempImg.height;
                            if (aspectRatio > 1) {
                                newWidth = maxWidth;
                                newHeight = newWidth / aspectRatio;
                            } else {
                                newHeight = maxHeight;
                                newWidth = newHeight * aspectRatio;
                            }
                        }

                        const canvas = document.createElement('canvas');
                        canvas.width = newWidth;
                        canvas.height = newHeight;
                        const ctx = canvas.getContext('2d');
                        ctx.drawImage(tempImg, 0, 0, newWidth, newHeight);

                        const compressedImageUrl = canvas.toDataURL('image/jpeg');
                        const imageSize = Math.floor(file.size / 1024);
                        displayImage(compressedImageUrl, imageSize, containerId);
                        updateTotalSize2();
                        updatePhotoCount2();
                        saveImage({ url: compressedImageUrl, size: imageSize, gallery: containerId });
                    };
                };

                reader.readAsDataURL(file);
            }
        }

        function displayImage(imageUrl, imageSize, containerId) {
            const gallery = document.getElementById(containerId);
            const container = document.createElement('div');
            container.className = 'photo-container';

            const img = document.createElement('img');
            img.src = imageUrl;
            img.addEventListener('click', () => openFullscreen2(imageUrl));

            const imageInfo = document.createElement('div');
            imageInfo.className = 'image-info';
            imageInfo.textContent = `${imageSize} KB`;

            const deleteIcon = document.createElement('span');
            deleteIcon.className = 'delete-icon';
            deleteIcon.innerHTML = '❌';
            deleteIcon.addEventListener('click', () => deleteImage(container, imageUrl, imageSize));

            container.appendChild(img);
            container.appendChild(imageInfo);
            container.appendChild(deleteIcon);
            gallery.appendChild(container);
        }

        function saveImage(image) {
            const savedImages = JSON.parse(localStorage.getItem('savedImages2')) || [];
            savedImages.push(image);
            localStorage.setItem('savedImages2', JSON.stringify(savedImages));
        }

        function deleteImage(container, imageUrl, imageSize) {
            container.remove();

            const savedImages = JSON.parse(localStorage.getItem('savedImages2')) || [];
            const updatedImages = savedImages.filter(img => img.url !== imageUrl);
            localStorage.setItem('savedImages2', JSON.stringify(updatedImages));

            updateTotalSize2(-imageSize);
            updatePhotoCount2();
        }

        function deleteAllImages() {
            document.querySelectorAll('.photo-container').forEach(container => container.remove());
            localStorage.removeItem('savedImages2');
            updateTotalSize2();
            updatePhotoCount2();
        }

        function promptForPasswordAndDelete() {
            const password = prompt('Введите пароль для удаления всех изображений:', '');

            if (password === '596') {
                deleteAllImages();
            } else {
                alert('Неверный пароль. Действие отменено.');
            }
        }

        function openFullscreen2(imageUrl) {
            const fullscreenContainer = document.getElementById('fullscreen-container');
            const fullscreenImage = document.getElementById('fullscreen-image');

            fullscreenImage.src = imageUrl;
            currentFullscreenImage2 = imageUrl;
            fullscreenContainer.style.display = 'flex';
        }

        function closeFullscreen() {
            const fullscreenContainer = document.getElementById('fullscreen-container');
            fullscreenContainer.style.display = 'none';
            currentFullscreenImage2 = null;
        }

        function updateTotalSize2(sizeChange = 0) {
            const savedImages = JSON.parse(localStorage.getItem('savedImages2')) || [];
            const totalSizeElement = document.getElementById('total-size-2');
            const totalSize = savedImages.reduce((total, img) => total + img.size, 0) + sizeChange;
            totalSizeElement.textContent = `Общий размер: ${totalSize} KB`;
        }

        function updatePhotoCount2() {
            const savedImages = JSON.parse(localStorage.getItem('savedImages2')) || [];
            const photoCountElement = document.getElementById('photo-count-2');
            const count = savedImages.length;
            photoCountElement.textContent = `Количество фото: ${count}`;
        }