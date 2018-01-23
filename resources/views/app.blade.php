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
		<header-image :image-url="images[0]" @header-clicked="openModal">
		</header-image>
		<div class="container">
			<div class="heading">
				<h1>@{{ title }}</h1>
				<p>@{{ address }}</p>
			</div>
			<hr>
			<div class="about">
				<h3>About this listing</h3>
				<expandable-text>@{{ about }}</expandable-text>
			</div>
			<div class="lists">
				<feature-list title="Amenities" :items="amenities">
					<template slot-scope="amenity">
						<i class="fa fa-lg" :class="amenity.icon"></i>
						<span>@{{ amenity.title }}</span>
					</template>
				</feature-list>
				<feature-list title="Prices" :items="prices">
					<template slot-scope="price">
						@{{ price.title }}:
						<strong>@{{ price.value }}</strong>
					</template>
				</feature-list>
			</div>
		</div>
		<modal-window ref="modalwindow">
      		<image-carousel :images="images"></image-carousel>
		</modal-window>
	</div>
	<script src="{{ asset('js/app.js') }}" type="text/javascript"></script>
</body>

</html>