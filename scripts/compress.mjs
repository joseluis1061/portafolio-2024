import imagemin from 'imagemin';
import pngquant from 'imagemin-pngquant';
import imageminWebp from 'imagemin-webp';
import webp from 'imagemin-webp';
const directory = "./src/assets/image/*.{webp, png}";
(async () => {
	const files = await imagemin([directory], {
		destination: "./src/assets/image/",
		plugins: [pngquant({ quality: [0.8, 0.8]}), imageminWebp({ quality: 80}), webp({ quality: 80})],
	})
	console.log('Images optimized', files);
})();
