<?php

if (!isset($_SESSION['js']) || $_SESSION['js'] == "") {
	echo "<noscript><meta http-equiv='refresh' content='0;url=/get-javascript-status.php&js=0'> </noscript>";
	$js = true;
} elseif (isset($_SESSION['js']) && $_SESSION['js'] == "0") {
	$js = false;
	$_SESSION['js'] = "";
} elseif (isset($_SESSION['js']) && $_SESSION['js'] == "1") {
	$js = true;
	$_SESSION['js'] = "";
}

if ($js) {
?>


	<html>

	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Yuk - Design</title>
	</head>
	<script src="./route.js"></script>

	<style>
		:root {
			--main-color: #111;
			--loader-color: #4CAF50;
			--back-color: #A5D6A7;
			--time: 3s;
			--size: 3px;
		}

		.loader {
			overflow: hidden;
			width: 100%;
			height: auto;
			position: fixed;
			top: 0;
			left: 0;
			display: flex;
			align-items: center;
			align-content: center;
			justify-content: flex-start;
			z-index: 100000;
		}

		.loader__element {
			height: var(--size);
			width: 100%;
			background: var(--back-color);

		}

		.loader__element:before {
			content: '';
			display: block;
			background-color: var(--loader-color);
			height: var(--size);
			width: 0;
			animation: getWidth var(--time) ease-in infinite;
		}

		@keyframes getWidth {
			100% {
				width: 100%;
			}
		}
	</style>


	<body>
		<div class="loader" id="loaderpage">
			<div class="loader__element"></div>
		</div>
		<div id="root">

		</div>
		<div id="loadjs"></div>
		<div id="preload" class="transition">
		</div>
	</body>

	<script>
		cf = {}
	</script>

	</html>

<?php
} else {
	echo 'sorry if you want this website on you must to enables javascript';
}
?>