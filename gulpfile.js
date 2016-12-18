const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('mytask', function() {
    console.log('Привет, я таск!');
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});