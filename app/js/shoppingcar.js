require(["config"],function(){
	require(["jquery","header","footer","template"],function($,header,footer,template){
		$("header").load("/html/component/header.html",function(){
			header.init();
		});
		
		$("footer").load("/html/component/footer.html",function(){
			footer.init();
		});
		
		var cart = $.cookie("cart");
		console.log(cart);
		if(cart  == null){
			
			$(".cart-empty").css({
				"display":"block",
				
			})
			$(".steps").css({
				"display":"none",
				
			})
			$(".cart-container").css({
				"display":"none",
			})
			$(".youlike").css({
				"display":"block",
			})
		}else{
			var res = JSON.parse(cart);
		 	var html = template("html-script",{products:res})
		 $("#html-template").html(html);
		}
		
	})
})