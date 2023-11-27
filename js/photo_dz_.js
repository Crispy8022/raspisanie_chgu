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
            const containerId = event.target.id === 'photo-input-1_' ? 'gallery-1_' : (event.target.id === 'photo-input-2_' ? 'gallery-2_' : (event.target.id === 'photo-input-3_' ? 'gallery-3_' : (event.target.id === 'photo-input-4_' ? 'gallery-4_' : (event.target.id === 'photo-input-5_' ? 'gallery-5_' : (event.target.id === 'photo-input-6_' ? 'gallery-6_' : (event.target.id === 'photo-input-7_' ? 'gallery-7_' : (event.target.id === 'photo-input-8_' ? 'gallery-8_' : (event.target.id === 'photo-input-9_' ? 'gallery-9_' : (event.target.id === 'photo-input-10_' ? 'gallery-10_' : (event.target.id === 'photo-input-11_' ? 'gallery-11_' : (event.target.id === 'photo-input-12_' ? 'gallery-12_' : (event.target.id === 'photo-input-13_' ? 'gallery-13_' : (event.target.id === 'photo-input-14_' ? 'gallery-14_' : (event.target.id === 'photo-input-15_' ? 'gallery-15_' : (event.target.id === 'photo-input-16_' ? 'gallery-16_' : (event.target.id === 'photo-input-17_' ? 'gallery-17_' : (event.target.id === 'photo-input-18_' ? 'gallery-18_' : (event.target.id === 'photo-input-19_' ? 'gallery-19_' : (event.target.id === 'photo-input-20_' ? 'gallery-20_' : (event.target.id === 'photo-input-21_' ? 'gallery-21_' : (event.target.id === 'photo-input-22_' ? 'gallery-22_' : (event.target.id === 'photo-input-23_' ? 'gallery-23_' : 'gallery-24_'))))))))))))))))))))));

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