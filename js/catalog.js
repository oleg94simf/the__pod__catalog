"use strict"
/* stars ***********************************************/
const retings = document.querySelectorAll('.card__reting');
if (retings.length > 0) {
	initRetings();
}

//основная функция
function initRetings() {
	let retingActive, retingValue;
	for (let index = 0; index < retings.length; index++) {
		const reting = retings[index];
		initReting(reting);
	}
	// Иницифлизация конкретный рейтинг
	function initReting(reting) {
		initRetingVars(reting);
		setRetingActiveWidth();
		if (reting.classList.contains('reting_set')) {
			setReting(reting);
		}
	}

	function initRetingVars(reting) {
		retingActive = reting.querySelector('.reting__active');
		retingValue = reting.querySelector('.reting__value');
	}

	function setRetingActiveWidth(index = retingValue.innerHTML) {
		const retingActiveWidth = index / 0.05;
		retingActive.style.width = `${retingActiveWidth}%`;
	}
	//возможность оценивать
	function setReting(reting) {
		const retingItems = reting.querySelectorAll('.reting__item');
		for (let index = 0; index < retingItems.length; index++) {
			const retingItem = retingItems[index];
			retingItem.addEventListener("mouseenter", function (e) {
				initRetingVars(reting);
				//обновление активных звезд
				setRetingActiveWidth(retingItem.value);
			});

			retingItem.addEventListener("mouseleave", function (e) {

				//обновление активных звезд
				setRetingActiveWidth();
			});


			retingItem.addEventListener("click", function (e) {
				initRetingVars(reting);

				if (reting.dataset.ajax) {
					setRetingValue(ratingItem.value, reting)
				} else {
					setRetingActiveWidth(retingItem.value);
					retingValue.innerHTML = index + 1;
					setRetingActiveWidth();
				}
			});
		}
	}
}

let likes = document.querySelectorAll('#svg_2');

for (let i = 0; i < likes.length; i++) {
	let like = likes[i];

	like.addEventListener('click', function () {
		this.classList.toggle('filled');
	})
}

