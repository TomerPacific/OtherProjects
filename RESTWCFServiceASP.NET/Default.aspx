<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="UdemyWCF._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

    <div class="jumbotron">
       <button onclick="doWork(); return false;">DoWork</button>
	   <button onclick="doSquare(); return false;">DoSquare</button>
	   <input type="number" id="squareValue" />
	   <button onclick="doAddValues(); return false;">DoAddValues</button>
		<input type="number" id="addValue1" />
		<input type="number" id="addValue2" />
    </div>

	<script type="text/javascript">
		function doWork() {
			console.info("Hello");

			$.ajax({
				url: "Service/Service1.svc/DoWork",
				type: "GET",
				datatype: "json",
				success: function (result) {
					console.info(result);
				}
			});
		}

		function doSquare() {

			var value = $("#squareValue").val();

			$.ajax({
				url: "Service/Service1.svc/DoSquare",
				type: "POST",
				data: JSON.stringify(value),
				datatype: "json",
				contentType: "application/json",
				success: function (result) {
					console.info(result);
				}
			});
		}

		function doAddValues() {

			var addValues = {
				"Value1": $("#addValue1").val(),
				"Value2": $("#addValue2").val()
			};

			$.ajax({
				url: "Service/Service1.svc/DoAddValues",
				type: "POST",
				data: JSON.stringify(addValues),
				datatype: "json",
				contentType: "application/json",
				success: function (result) {
					console.info(result);
				}
			});
		}

	</script>
</asp:Content>
