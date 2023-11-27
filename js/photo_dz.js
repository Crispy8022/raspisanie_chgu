        let currentFullscreenImage = null;

        document.querySelectorAll('.photo-input').forEach(function(input) {
            input.addEventListener('change', handleFileSelect);
        });

        // При загрузке страницы восстанавливаем изображения из localStorage.
        const savedImages = JSON.parse(localStorage.getItem('savedImages')) || [];
        savedImages.forEach(image => displayImage(image.url, image.size, image.gallery));

        // Проверяем, открыто ли увеличенное изображение.
        if (currentFullscreenImage) {
            openFullscreen(currentFullscreenImage);
        }

        // Обновляем общий размер при загрузке страницы.
        updateTotalSize();
        updatePhotoCount();

        function handleFileSelect(event) {
            const files = event.target.files;
            const containerId = event.target.id === 'photo-input-1' ? 'gallery-1' : (event.target.id === 'photo-input-2' ? 'gallery-2' : (event.target.id === 'photo-input-3' ? 'gallery-3' : (event.target.id === 'photo-input-4' ? 'gallery-4' : (event.target.id === 'photo-input-5' ? 'gallery-5' : (event.target.id === 'photo-input-6' ? 'gallery-6' : (event.target.id === 'photo-input-7' ? 'gallery-7' : (event.target.id === 'photo-input-8' ? 'gallery-8' : (event.target.id === 'photo-input-9' ? 'gallery-9' : (event.target.id === 'photo-input-10' ? 'gallery-10' : (event.target.id === 'photo-input-11' ? 'gallery-11' : (event.target.id === 'photo-input-12' ? 'gallery-12' : (event.target.id === 'photo-input-13' ? 'gallery-13' : (event.target.id === 'photo-input-14' ? 'gallery-14' : (event.target.id === 'photo-input-15' ? 'gallery-15' : (event.target.id === 'photo-input-16' ? 'gallery-16' : (event.target.id === 'photo-input-17' ? 'gallery-17' : (event.target.id === 'photo-input-18' ? 'gallery-18' : (event.target.id === 'photo-input-19' ? 'gallery-19' : (event.target.id === 'photo-input-20' ? 'gallery-20' : (event.target.id === 'photo-input-21' ? 'gallery-21' : (event.target.id === 'photo-input-22' ? 'gallery-22' : (event.target.id === 'photo-input-23' ? 'gallery-23' : 'gallery-24'))))))))))))))))))))));

            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const reader = new FileReader();

                reader.onload = function (e) {
                    const imageUrl = e.target.result;

                    const tempImg = new Image();
                    tempImg.src = imageUrl;

                    tempImg.onload = function() {
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
                        updateTotalSize();
                        updatePhotoCount();
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
            img.addEventListener('click', function () {
                openFullscreen(imageUrl);
            });

            const imageInfo = document.createElement('div');
            imageInfo.className = 'image-info';
            imageInfo.textContent = `${imageSize} KB`;

            const deleteIcon = document.createElement('span');
            deleteIcon.className = 'delete-icon';
            deleteIcon.innerHTML = '❌';
            deleteIcon.addEventListener('click', function () {
                deleteImage(container, imageUrl, imageSize);
            });

            container.appendChild(img);
            container.appendChild(imageInfo);
            container.appendChild(deleteIcon);
            gallery.appendChild(container);
        }

        function saveImage(image) {
            const savedImages = JSON.parse(localStorage.getItem('savedImages')) || [];
            savedImages.push(image);
            localStorage.setItem('savedImages', JSON.stringify(savedImages));
        }

        function deleteImage(container, imageUrl, imageSize) {
            container.remove();

            const savedImages = JSON.parse(localStorage.getItem('savedImages')) || [];
            const updatedImages = savedImages.filter(img => img.url !== imageUrl);
            localStorage.setItem('savedImages', JSON.stringify(updatedImages));

            updateTotalSize(-imageSize);
            updatePhotoCount();
        }

        function deleteAllImages() {
            document.querySelectorAll('.photo-container').forEach(container => {
                container.remove();
            });

            localStorage.removeItem('savedImages');
            updateTotalSize();
            updatePhotoCount();
        }

        function promptForPasswordAndDelete() {
            const password = prompt('Введите пароль для удаления всех изображений:', '');

            if (password === '596') {
                deleteAllImages();
            } else {
                alert('Неверный пароль. Действие отменено.');
            }
        }

        function openFullscreen(imageUrl) {
            const fullscreenContainer = document.getElementById('fullscreen-container');
            const fullscreenImage = document.getElementById('fullscreen-image');

            fullscreenImage.src = imageUrl;
            currentFullscreenImage = imageUrl;
            fullscreenContainer.style.display = 'flex';
        }

        function closeFullscreen() {
            const fullscreenContainer = document.getElementById('fullscreen-container');
            fullscreenContainer.style.display = 'none';
            currentFullscreenImage = null;
        }

        function updateTotalSize(sizeChange = 0) {
            const savedImages = JSON.parse(localStorage.getItem('savedImages')) || [];
            const totalSizeElement = document.getElementById('total-size');
            const totalSize = savedImages.reduce((total, img) => total + img.size, 0) + sizeChange;
            totalSizeElement.textContent = `Общий размер: ${totalSize} KB`;
        }

        function updatePhotoCount() {
            const savedImages = JSON.parse(localStorage.getItem('savedImages')) || [];
            const photoCountElement = document.getElementById('photo-count');
            const count = savedImages.length;
            photoCountElement.textContent = `Количество фото: ${count}`;
        }