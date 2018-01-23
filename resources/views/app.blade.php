<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<link rel="shortcut icon" type="image/x-icon" href="{{ asset('favicon.ico') }}" />
	<title>vuebnb</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css">
	<link rel="stylesheet" href="https://unpkg.com/open-sans-all/css/open-sans.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="{{ asset('css/vue-style.css') }}" type="text/css">
	<script type="text/javascript">
		window.vuebnb_listing_model = "{!! addslashes($model) !!}";
	</script>
</head>

<body>
	<div id="toolbar">
		<img class="icon" src="{{ asset('images/logo.png') }}">
		<h1>vuebnb</h1>
	</div>
	<div id="app">
		<div class="header">
			<div class="header-img" :style="headerImageStyle" @click="openModal">
				<button class="view-photos">View Photos</button>
			</div>
		</div>
		<div class="container">
			<div class="heading">
				<h1>@{{ title }}</h1>
				<p>@{{ address }}</p>
			</div>
			<hr>
			<div class="about">
				<h3>About this listing</h3>
				<p :class="{ contracted: contracted }">@{{ about }}</p>
				<button v-if="contracted" class="more" @click="contracted = false">+ More</button>
			</div>
			<div class="lists">
				<div class="amenities list">
					<div class="title">
						<strong>Amenities</strong>
					</div>
					<div class="content">
						<div class="list-item" v-for="amenity in amenities">
							<i class="fa fa-lg" :class="amenity.icon"></i>
							<span>@{{ amenity.title }}</span>
						</div>
					</div>
				</div>
				<div class="prices list">
					<div class="title">
						<strong>Prices</strong>
					</div>
					<div class="content">
						<div class="list-item" v-for="price in prices">
							@{{ price.title }}:
							<strong>@{{ price.value }}</strong>
						</div>
					</div>
				</div>
			</div>
		</div>
		<modal-window ref="modalwindow">
      		<image-carousel :images="images"></image-carousel>
		</modal-window>
	</div>
	<script src="{{ asset('js/app.js') }}" type="text/javascript"></script>
</body>

</html>