{% extends "../layouts/default.swig" %}

{% block content %}
	<div class="container">
		<div class="jumbotron">
			<img src="/images/logo.svg" width="160">
			<h1>Bem-vindo</h1>
			<p><a href="www.apdip.pt" target="_blank">APDIP</a> - Associação Portuguesa de Doentes com Imunodeficiências Primárias.</p>
			{% if user and user.canAccessKeystone %}
				<p>
					<a href="/keystone" class="btn btn-lg btn-primary">Abrir plataforma</a>
				</p>
			{% else %}
				<p>
					<a href="/keystone/signin" style="margin-right: 10px" class="btn btn-lg btn-primary">Iniciar sessão</a>
					para aceder à plataforma.
				</p>
			{% endif %}
			<hr>
			<p>Desenvolvido por <a href="http://ricardopereira.eu" target="_blank">Ricardo Pereira</a></p>
		</div>
	</div>
{% endblock %}
