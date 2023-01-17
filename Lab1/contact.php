<?php
	$name = $_POST["name"];
  	$visitor_age = $_POST["age"];
	$visitor_email = $_POST["email"];
	$message = $_POST["message"];
	$email_to = "drakoshakaramelka@yandex.ru";

	$email_subject = "Lab work";

	$email_body = "You have received a new message from the user $name.\n".
                            "Here is the message:\n $message".
    mail(string $email_to, string $email_subject, string $message, array|string $additional_headers = [], string $additional_params = ""): bool
?>
<!DOCTYPE HTML>
<HTML>
	<HEAD>
		<meta charset="utf-8">
		<TITLE> Лабораторная работа </TITLE>
	</HEAD>
	<body style="background-color:#465449;">
		<form method="post" action="sendform.php" style="background-color:#cae0cf;">
			<header><h1>Отправить мне письмо</h1></header>
			<div>
				<input type="text" name="fio" placeholder="Укажите ФИО" required>
			</br>
			<p>Укажите пол:
			<input type="radio" id="male" name="male" value="Male">
			<label for="male">Мужской</label>
			<input type="radio" id="female" name="female" value="Female">
			<label for="female">Женский</label></p>
			</br>
			<label for="age">Укажите возраст</label>
			<select name="age" id="age">
				<option>13-18</option>
				<option>19-25</option>
				<option>26-35</option>
				<option>36-45</option>
				<option>46-55</option>
				<option>56-65</option>
				<option>66+</option>
			</select>
			</br>
				<input type="text" name="email" id="email" placeholder="Укажите e-mail" required>
			</div>
			<div>
			<div>
				<textarea name="message" rows="12" cols="35" placeholder="Введите текст"></textarea>
				</br>
				<input type="submit" onclick="location.href='mailto:drakoshakaramelka@yandex.ru'"; value="Отправить">
				<input type="reset" value="Очистить">
			</div>
		</form>
	</body>
</HTML>