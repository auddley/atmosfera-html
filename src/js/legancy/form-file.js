;(function () {
    function fileFormInit() {
        const wrapper = document.querySelectorAll('.upload-file__wrapper');

        if (wrapper.length) {
            wrapper.forEach(wrap => {
                const inputFile = wrap.querySelectorAll('.upload-file__input');

                inputFile.forEach(function(el) {
                    let textSelector = wrap.querySelector('.upload-file__text');

                    // Событие выбора файла(ов)
                    el.addEventListener('change', function (e) {
                        // Очищаем старый список
                        textSelector.innerHTML = '';

                        // Создаем массив файлов
                        const fileList = Array.from(el.files);

                        // Вызываем функцию для каждого файла
                        fileList.forEach(file => {
                            uploadFile(file);
                        });
                    });

                    // Проверяем размер файлов и выводим название
                    const uploadFile = (file) => {
                        console.log('file', file);

                        // файла < 5 Мб
                        if (file.size > 5 * 1024 * 1024) {
                            alert('Файл должен быть не более 5 МБ.');
                            return;
                        }

                        // Показ загружаемых файлов
                        if (file) {
                            textSelector.innerHTML += `<span>${file.name}</span>`;
                        }
                    }
                });
            });
        }
    }

    window.fileForm = {
        init: fileFormInit
    };

    window.fileForm.init();
})();
