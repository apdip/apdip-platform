{% extends "../layouts/default.swig" %}

{% block content %}
	<div class="container">
		<div class="jumbotron">
			<img src="/images/logo.svg" width="160">
			<h1>Welcome</h1>
			<p><a href="www.apdip.pt" target="_blank">APDIP</a> - Associação Portuguesa de Doentes com Imunodeficiências Primárias.</p>
			{% if user and user.canAccessKeystone %}
				<p>
					<a href="/keystone" class="btn btn-lg btn-primary">Open the APDIP Database</a>
				</p>
			{% else %}
				<p>
					<a href="/keystone/signin" style="margin-right: 10px" class="btn btn-lg btn-primary">Sign in</a>
					to use the APDIP Database.
				</p>
			{% endif %}
			<hr>
			<p>Developed by <a href="http://ricardopereira.eu" target="_blank">Ricardo Pereira</a></p>
		</div>
	</div>
{% endblock %}
