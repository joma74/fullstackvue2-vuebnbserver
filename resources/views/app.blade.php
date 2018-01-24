<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<link rel="shortcut icon" type="image/x-icon" href="{{ asset('favicon.ico') }}" />
	<title>vuebnb</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" as="style">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css">
	<link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" as="style">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="{{ asset('css/vue-style.css') }}" type="text/css">
	<script type="text/javascript">
		window.vuebnb_listing_model = "{!! addslashes($data) !!}";
	</script>
</head>

<body>
	<div id="app"></div>
	<script src="{{ asset('js/app.js') }}" type="text/javascript"></script>
</body>

</html>