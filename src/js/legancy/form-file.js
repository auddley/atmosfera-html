;(function () {
    function fileFormInit() {
        const forms = document.querySelectorAll('form');
        const inputFile = document.querySelectorAll('.upload-file__input');


        inputFile.forEach(function(el) {
            let textSelector = document.querySelector('.upload-file__text');
            let fileList;

            // Событие выбора файла(ов)
            el.addEventListener('change', function (e) {
                // создаём массив файлов
                fileList = [];
                for (let i = 0; i < el.files.length; i++) {
                    fileList.push(el.files[i]);
                }

                // вызов функции для каждого файла
                fileList.forEach(file => {
                    uploadFile(file);
                });
            });

            // Проверяем размер файлов и выводим название
            const uploadFile = (file) => {

                // файла <5 Мб
                if (file.size > 5 * 1024 * 1024) {
                    alert('Файл должен быть не более 5 МБ.');
                    return;
                }

                // Показ загружаемых файлов
                if (file) {
                    textSelector.textContent = file.name;
                }
            }
        });
    }

    window.fileForm = {
        init: fileFormInit
    };

    window.fileForm.init();
})();
