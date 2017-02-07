{% extends "../layouts/default.swig" %}

{% block content %}
	<div class="container">
		<div class="jumbotron">
			<h1>Reports</h1>
  	</div>
		<ul>
		{% for country in data.countries %}
			<li>{{ country.name }}</li>
		{% endfor %}
		</ul>
	</div>
{% endblock %}
