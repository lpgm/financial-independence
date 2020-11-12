$(".earn-info-box").hide();
$(".save-info-box").hide();
$(".invest-info-box").hide();
$("#risky-box").hide();

$(function () {
	$(".do-this").on("click", function () {
		$(".earn-info-box").hide();
		$(".save-info-box").hide();
		$(".invest-info-box").hide();
		let id = this.id;
		let boxClass = "";
		if (id === "earn") {
			boxClass = ".earn-info-box";
		}
		if (id === "save") {
			boxClass = ".save-info-box";
		}
		if (id === "invest") {
			boxClass = ".invest-info-box";
		}
		$(boxClass).fadeIn("normal", "linear");
	});
	$("#risky").on("click", function () {
		$("#risky-box").toggle();
	});
});