<section id="intro"
  	<?php 
		if(isset( $_SESSION['intro'] ) ){ echo 'style="display: none;"';}else{ session_start(); $_SESSION['intro'] = ""; }
		?>
>
    <img src="img/designologo.svg" alt="Logo Designosource">
    <a href="#" title="Sla animatie over" class="btn-white" id="close">Sla animatie over<span class="arrow-right-white"></span></a>
</section>