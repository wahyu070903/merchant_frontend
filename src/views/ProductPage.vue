<template>
	<Navbar />
	<section>
		<div class="flex flex-row">
			<div class="flex flex-col items-center mt-14 ml-28">
				<div class="relative h-96 w-96 bg-red-400">
					<img src="../assets/images/baju1.jpg" alt="large-product-image" class="h-96 w-96 object-cover" draggable="false">
					<div class="absolute bottom-0 left-0 w-fit flex flex-row items-center bg-[#E9E9E9]/60 py-3 px-7">
						<svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_46_73)"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.71274 16.8426C5.33285 16.8426 1.78161 13.4651 1.78161 9.29208C1.78161 5.11905 5.33285 1.7348 9.71274 1.7348C14.0926 1.7348 17.6439 5.11905 17.6439 9.29208C17.6439 13.4651 14.0926 16.8426 9.71274 16.8426ZM22.4053 20.7528L16.6544 15.2719C18.1605 13.6876 19.0853 11.5977 19.0853 9.29208C19.0853 4.35725 14.8892 0.359497 9.71274 0.359497C4.53626 0.359497 0.34021 4.35725 0.34021 9.29208C0.34021 14.2202 4.53626 18.2179 9.71274 18.2179C11.9493 18.2179 14.0007 17.4696 15.612 16.2224L21.3866 21.7235C21.668 21.9932 22.124 21.9932 22.4053 21.7235C22.6874 21.4606 22.6874 21.0224 22.4053 20.7528ZM13.2355 8.72581H10.4522V6.02918C10.4522 5.65165 10.141 5.35502 9.75662 5.35502C9.37294 5.35502 9.06098 5.65165 9.06098 6.02918V8.72581H6.27916C5.89548 8.72581 5.58354 8.84715 5.58354 9.21793C5.58354 9.59546 5.89548 10.0741 6.27916 10.0741H9.06098V12.7708C9.06098 13.1483 9.37294 13.4449 9.75662 13.4449C10.141 13.4449 10.4522 13.1483 10.4522 12.7708V10.0741H13.2355C13.6191 10.0741 13.9311 9.77075 13.9311 9.39997C13.9311 9.02918 13.6191 8.72581 13.2355 8.72581Z" fill="black"/></g><defs><clipPath id="clip0_46_73"><rect width="22.2824" height="21.573" fill="white" transform="translate(0.34021 0.359497)"/></clipPath></defs></svg>
						<p class="ml-3 font-light font-roboto text-xs opacity-100">Double tap to zoom</p>
					</div>
					<div class="absolute top-0 right-0">
						<button class="h-7 w-7 bg-[#E9E9E9]/60 flex items-center justify-center">
							<svg width="17" height="4" viewBox="0 0 17 4" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.678589" y="0.390625" width="15.5085" height="3.10652" rx="1.55326" fill="#E45656"/></svg>
						</button>
						<button class="h-7 w-7 bg-[#E9E9E9]/60 flex items-center justify-center mt-2">
							<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.945801" y="6.34436" width="14.9738" height="2.63583" rx="1.31792" fill="#E45656"/><rect x="7.07141" y="14.911" width="14.4971" height="2.7225" rx="1.36125" transform="rotate(-90 7.07141 14.911)" fill="#E45656"/></svg>
						</button>
					</div>
				</div>
				<div class="mt-3.5 max-w-[409px] relative">
					<Splide :has-track="false" :options="{pagination:false, perPage:4}">
						<SplideTrack>
							<SplideSlide>
								<img src="../assets/images/baju1.jpg" class="h-24 w-24" draggable="false">
							</SplideSlide>
							<SplideSlide>
								<img src="../assets/images/baju1.jpg" class="h-24 w-24" draggable="false">
							</SplideSlide>
							<SplideSlide>
								<img src="../assets/images/baju1.jpg" class="h-24 w-24" draggable="false">
							</SplideSlide>
							<SplideSlide>
								<img src="../assets/images/baju1.jpg" class="h-24 w-24" draggable="false">
							</SplideSlide>
							<SplideSlide>
								<img src="../assets/images/baju1.jpg" class="h-24 w-24" draggable="false">
							</SplideSlide>
							<SplideSlide>
								<img src="../assets/images/baju1.jpg" class="h-24 w-24" draggable="false">
							</SplideSlide>
						</SplideTrack>
						<div class="splide__arrows w-full">
    						<button class="splide__arrow splide__arrow--prev bg-[#E9E9E9]/60 h-full rounded-none absolute left-0">
								<svg class="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 6L9 12L15 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
							</button>
    						<button class="splide__arrow splide__arrow--next bg-[#E9E9E9]/60 h-full rounded-none absolute right-0">
								<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 6L15 12L9 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
							</button>
  						</div>
					</Splide>
				</div>
			</div>
			<div class="mt-14 ml-20">
				<div class="w-fit px-2.5 py-0.5 rounded-sm bg-[#38D25A]">
					<p class="font-roboto font-medium text-xs text-white">Ready</p>
				</div>
				<p class="font-titilium font-semibold text-4xl">Tshirt-Origin Candy Box 90'S</p>
				<div class="flex flex-row mt-2">
					<p class="font-roboto font-light text-2xl pt-0.5">$ 120 USD</p>
					<p class="font-roboto font-light text-base opacity-40 line-through mx-4">$ 120 USD</p>
				</div>
				<p class="font-roboto font-light text-base mt-3.5">Color :</p>
				<div class="flex flex-row items-center mt-3.5">
					<button class="h-8 w-8 mr-3.5 bg-[#282828]"></button>
					<button class="h-8 w-8 mr-3.5 bg-[#45EB42]"></button>
					<button class="h-8 w-8 mr-3.5 bg-[#EB4242]"></button>
					<button class="h-8 w-8 mr-3.5 bg-[#428FEB]"></button>
					<button class="h-8 w-8 mr-3.5 bg-[#FFFFFF] border border-[#000000]"></button>
				</div>
				<div>
					<div class="flex flex-row items-center">
						<div>
							<p class="font-roboto font-light text-base mt-3.5">Size :</p>
							<div class="flex flex-row items-center mt-3.5">
								<button class="h-8 w-8 mr-3.5 bg-[#D9D9D9]">
									<p class="font-roboto font-light text-base text-center">S</p>
								</button>
								<button class="h-8 w-8 mr-3.5 bg-[#D9D9D9]">
									<p class="font-roboto font-light text-base text-center">M</p>
								</button>
								<button class="h-8 w-8 mr-3.5 bg-[#D9D9D9]">
									<p class="font-roboto font-light text-base text-center">L</p>
								</button>
								<button class="h-8 w-8 mr-3.5 bg-[#D9D9D9]">
									<p class="font-roboto font-light text-base text-center">XL</p>
								</button>
								<button>
									<p class="font-roboto font-light text-base text-[#0569FF]">+ Other</p>
								</button>
							</div>
						</div>
						<div class="ml-14">
							<p class="font-roboto font-light text-base mt-3.5">Quantity :</p>
							<div class="h-12 flex flex-row border border-[#2F2F2F] mt-3.5">
								<button class="h-full px-2.5 flex items-center justify-center">
									<svg width="14" height="4" viewBox="0 0 17 4" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.678589" y="0.390625" width="15.5085" height="3.10652" rx="1.55326" fill="#E45656"/></svg>
								</button>
								<input type="number" class="h-full w-14 border-none text-center font-roboto font-light text-xl " value="1">
								<button class="h-full px-2.5 flex items-center justify-center">
									<svg width="14" height="14" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.945801" y="6.34436" width="14.9738" height="2.63583" rx="1.31792" fill="#E45656"/><rect x="7.07141" y="14.911" width="14.4971" height="2.7225" rx="1.36125" transform="rotate(-90 7.07141 14.911)" fill="#E45656"/></svg>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div class="w-full mt-8">
					<button class=" w-full py-3 flex flex-row items-center justify-center bg-[#2F2F2F]">
						<svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.71163 2.16669C2.10052 2.16669 1.6051 2.66935 1.6051 3.28941C1.6051 3.90947 2.10052 4.41214 2.71163 4.41214H3.23436C3.73335 4.41214 4.17061 4.751 4.3019 5.23946L4.76249 6.95301L7.13773 15.7897V17.8849C7.13773 18.6635 7.39813 19.3805 7.83538 19.9509C7.40135 20.4465 7.13773 21.0992 7.13773 21.8144C7.13773 23.3646 8.37626 24.6212 9.90405 24.6212C11.4318 24.6212 12.6704 23.3646 12.6704 21.8144C12.6704 21.6222 12.6513 21.4345 12.615 21.253H16.0453C16.009 21.4345 15.9899 21.6222 15.9899 21.8144C15.9899 23.3646 17.2285 24.6212 18.7563 24.6212C20.284 24.6212 21.5226 23.3646 21.5226 21.8144C21.5226 21.4456 21.4524 21.0934 21.3251 20.7707C21.4495 20.5891 21.5226 20.3683 21.5226 20.1303C21.5226 19.5102 21.0272 19.0076 20.4161 19.0076H18.7563H10.4573C9.8462 19.0076 9.35079 18.505 9.35079 17.8849V16.7621H20.6772C21.6754 16.7621 22.55 16.0842 22.8125 15.107L24.6216 8.37069C25.0051 6.94236 23.9454 5.53487 22.4864 5.53487H6.67519L6.43697 4.64864C6.04309 3.18328 4.73133 2.16669 3.23436 2.16669H2.71163ZM18.7563 21.253C18.4508 21.253 18.203 21.5044 18.203 21.8144C18.203 22.1244 18.4508 22.3758 18.7563 22.3758C19.0618 22.3758 19.3095 22.1244 19.3095 21.8144C19.3095 21.5044 19.0618 21.253 18.7563 21.253ZM20.6772 14.5167H9.08943L7.27874 7.78032H22.4864L20.6772 14.5167ZM9.90405 21.253C9.5985 21.253 9.35079 21.5044 9.35079 21.8144C9.35079 22.1244 9.5985 22.3758 9.90405 22.3758C10.2096 22.3758 10.4573 22.1244 10.4573 21.8144C10.4573 21.5044 10.2096 21.253 9.90405 21.253Z" fill="white"/></svg>
						<p class="font-roboto font-light text-base mx-3 text-white">Add To Cart</p>
					</button>
				</div>
			</div>
		</div>
	</section>
</template>
<style>
	.splide__slide{
		padding-right:8px;
	}
	.splide__arrow svg{
		fill: none !important;
		transform: translateX(0) !important;
	}
	.splide__arrow:disabled{
		opacity:0.6 !important;
	}
</style>
<script>
	import Navbar from '../components/Navbar.vue'
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
    import '@splidejs/vue-splide/css';
	export default {
		components :{
			Navbar,
			Splide,
            SplideSlide,
			SplideTrack
		}
	}
</script>