/*
Khiel Jansen Mantilla
Khiel_Mantilla@student.uml.edu
kmantill@cs.uml.edu
Updated on June 22 2024 at 3:59 PM

It is a fun game I create a scrabble provocational game of which the game generates random tiles for the player to drop onto the board game. The tiles have to sit directly next to each other, and the board game needs to have at least one tile for the submission to succeed. The score for this word is recorded and printoued out to the screen and the total score is added to this.

*/

$(function() {
    
    let array = [
    	"Scrabble_Tiles/Scrabble_Tile_A.jpg",
    	"Scrabble_Tiles/Scrabble_Tile_B.jpg",
    	"Scrabble_Tiles/Scrabble_Tile_C.jpg",
    	"Scrabble_Tiles/Scrabble_Tile_D.jpg",
    	"Scrabble_Tiles/Scrabble_Tile_E.jpg",
    	"Scrabble_Tiles/Scrabble_Tile_F.jpg",
    	"Scrabble_Tiles/Scrabble_Tile_G.jpg",
    	"Scrabble_Tiles/Scrabble_Tile_H.jpg",
    	"Scrabble_Tiles/Scrabble_Tile_I.jpg",
    	"Scrabble_Tiles/Scrabble_Tile_J.jpg",
    	"Scrabble_Tiles/Scrabble_Tile_K.jpg",
    	"Scrabble_Tiles/Scrabble_Tile_L.jpg",
    	"Scrabble_Tiles/Scrabble_Tile_M.jpg",
    	"Scrabble_Tiles/Scrabble_Tile_N.jpg",
    	"Scrabble_Tiles/Scrabble_Tile_O.jpg",
    	"Scrabble_Tiles/Scrabble_Tile_P.jpg",
    	"Scrabble_Tiles/Scrabble_Tile_Q.jpg",
    	"Scrabble_Tiles/Scrabble_Tile_R.jpg",
    	"Scrabble_Tiles/Scrabble_Tile_S.jpg",
    	"Scrabble_Tiles/Scrabble_Tile_T.jpg",
    	"Scrabble_Tiles/Scrabble_Tile_U.jpg",
    	"Scrabble_Tiles/Scrabble_Tile_V.jpg",
    	"Scrabble_Tiles/Scrabble_Tile_W.jpg",
    	"Scrabble_Tiles/Scrabble_Tile_X.jpg",
    	"Scrabble_Tiles/Scrabble_Tile_Y.jpg",
    	"Scrabble_Tiles/Scrabble_Tile_Z.jpg",
    	"Scrabble_Tiles/Scrabble_Tile_Blank.jpg",
    ];
	function start() {
    var selecte = getrandomtiles(array, 7);
	
    $.each(selecte, function(index, url) {
        let img = $('<img>').attr('src', url).addClass("tiles");
        $('.thetiles').append(img);
    });
    $(".tiles").draggable({
        revert: "invalid",
        cursor: "move"
    });
	}
	start();
    
    let arr0 = 0;
    let arr1 = 0;
    $(".score-0, .score-1, .score-2, .score-3, .score-4, .score-5, .score-6, .score-7, .score-8, .score-9, .score-10, .score-11, .score-12, .score-13, .score-14").droppable({
		accept: ".tiles",
		drop: function(event, ui) {
			if ($(this).children().length === 0) {
			$(this).append(ui.draggable);
			ui.draggable.css({
                top: '0',
                left: '0'
            });
            arr0 = [
				$(".score-0").children().length,
				$(".score-1").children().length,
				$(".score-2").children().length,
				$(".score-3").children().length,
				$(".score-4").children().length,
				$(".score-5").children().length,
				$(".score-6").children().length,
				$(".score-7").children().length,
				$(".score-8").children().length,
				$(".score-9").children().length,
				$(".score-10").children().length,
				$(".score-11").children().length,
				$(".score-12").children().length,
				$(".score-13").children().length,
				$(".score-14").children().length,
			];
			var imageSrc = $(".score-0 img").attr("src");
			// console.log("image: ", imageSrc);
			arr1 = [
				$(".score-0 img").attr("src"),
				$(".score-1 img").attr("src"),
				$(".score-2 img").attr("src"),
				$(".score-3 img").attr("src"),
				$(".score-4 img").attr("src"),
				$(".score-5 img").attr("src"),
				$(".score-6 img").attr("src"),
				$(".score-7 img").attr("src"),
				$(".score-8 img").attr("src"),
				$(".score-9 img").attr("src"),
				$(".score-10 img").attr("src"),
				$(".score-11 img").attr("src"),
				$(".score-12 img").attr("src"),
				$(".score-13 img").attr("src"),
				$(".score-14 img").attr("src"),
			];
			} else {
                ui.draggable.draggable('option', 'revert', true);
            }
            // console.log($(this).children().length);
            out: function out(event, ui) {
			arr0 = [
				$(".score-0").children().length,
				$(".score-1").children().length,
				$(".score-2").children().length,
				$(".score-3").children().length,
				$(".score-4").children().length,
				$(".score-5").children().length,
				$(".score-6").children().length,
				$(".score-7").children().length,
				$(".score-8").children().length,
				$(".score-9").children().length,
				$(".score-10").children().length,
				$(".score-11").children().length,
				$(".score-12").children().length,
				$(".score-13").children().length,
				$(".score-14").children().length,
			];
			}
		}
    });
    
    function getrandomtiles(array, count) {
		var shuffled = array.slice(0), i = array.length, min = i - count, temp, index;
		while (i-- > min) {
		index = Math.floor((i + 1) * Math.random());
		temp = shuffled[index];
		shuffled[index] = shuffled[i];
		shuffled[i] = temp;
		}
		return shuffled.slice(min);
	}
	/*
	let arr = [
		$(".score-0").children().length,
		$(".score-1").children().length,
		$(".score-2").children().length,
		$(".score-3").children().length,
		$(".score-4").children().length,
		$(".score-5").children().length,
		$(".score-6").children().length,
		$(".score-7").children().length,
		$(".score-8").children().length,
		$(".score-9").children().length,
		$(".score-10").children().length,
		$(".score-11").children().length,
		$(".score-12").children().length,
		$(".score-13").children().length,
		$(".score-14").children().length,
	];*/

	function sequential(arr) {
		if (arr === 0) return false;
		var firstIndex0;
		var lastIndex0;
		try {
			firstIndex0 = arr.indexOf(1);
			lastIndex0 = arr.lastIndexOf(1);
		} catch (error) {
			console.log(error);
		}

		if (firstIndex0 !== -1 && lastIndex0 !== -1) {
		for (var i = firstIndex0 + 1; i < lastIndex0; i++) {
			if (arr[i] === 0) {
			return false;
			}
		}
		return true;
		}
		return false;
	}
	
	let score = 0;
	let totalscore = 0;
	$('#submit').click(isTo);
	function isTo() {
		console.log("arr0", arr0);
		let bool0 = sequential(arr0);
		console.log("bool0", bool0);
		console.log("arr1", arr1);
		let score = 0;


		if (bool0 === true) {
		$.each(arr1, function(index, value) {
			if (value === "Scrabble_Tiles/Scrabble_Tile_A.jpg") {
				score += 1;
			}
			if (value === "Scrabble_Tiles/Scrabble_Tile_B.jpg") {
				score += 3;
			}
			if (value === "Scrabble_Tiles/Scrabble_Tile_C.jpg") {
				score += 3;
			}
			if (value === "Scrabble_Tiles/Scrabble_Tile_D.jpg") {
				score += 2;
			}
			if (value === "Scrabble_Tiles/Scrabble_Tile_E.jpg") {
				score += 1;
			}
			if (value === "Scrabble_Tiles/Scrabble_Tile_F.jpg") {
				score += 4;
			}
			if (value === "Scrabble_Tiles/Scrabble_Tile_G.jpg") {
				score += 2;
			}
			if (value === "Scrabble_Tiles/Scrabble_Tile_H.jpg") {
				score += 4;
			}
			if (value === "Scrabble_Tiles/Scrabble_Tile_I.jpg") {
				score += 1;
			}
			if (value === "Scrabble_Tiles/Scrabble_Tile_J.jpg") {
				score += 8;
			}
			if (value === "Scrabble_Tiles/Scrabble_Tile_K.jpg") {
				score += 5;
			}
			if (value === "Scrabble_Tiles/Scrabble_Tile_L.jpg") {
				score += 1;
			}
			if (value === "Scrabble_Tiles/Scrabble_Tile_M.jpg") {
				score += 3;
			}
			if (value === "Scrabble_Tiles/Scrabble_Tile_N.jpg") {
				score += 1;
			}
			if (value === "Scrabble_Tiles/Scrabble_Tile_O.jpg") {
				score += 1;
			}
			if (value === "Scrabble_Tiles/Scrabble_Tile_P.jpg") {
				score += 3;
			}
			if (value === "Scrabble_Tiles/Scrabble_Tile_Q.jpg") {
				score += 10;
			}
			if (value === "Scrabble_Tiles/Scrabble_Tile_R.jpg") {
				score += 1;
			}
			if (value === "Scrabble_Tiles/Scrabble_Tile_S.jpg") {
				score += 1;
			}
			if (value === "Scrabble_Tiles/Scrabble_Tile_T.jpg") {
				score += 1;
			}
			if (value === "Scrabble_Tiles/Scrabble_Tile_U.jpg") {
				score += 1;
			}
			if (value === "Scrabble_Tiles/Scrabble_Tile_V.jpg") {
				score += 4;
			}
			if (value === "Scrabble_Tiles/Scrabble_Tile_W.jpg") {
				score += 4;
			}
			if (value === "Scrabble_Tiles/Scrabble_Tile_X.jpg") {
				score += 8;
			}
			if (value === "Scrabble_Tiles/Scrabble_Tile_Y.jpg") {
				score += 4;
			}
			if (value === "Scrabble_Tiles/Scrabble_Tile_Z.jpg") {
				score += 10;
			}
			if (value === "Scrabble_Tiles/Scrabble_Tile_Blank.jpg") {
				score += 0;
			}
		});
		totalscore += score;
		$("#score").text("The score for this word - " + score);
		$("#totalscore").text("The total score - " + totalscore);
		$(".boardtile img").remove();
		/*$(".score-0, .score-1, .score-2, .score-3, .score-4, .score-5, .score-6, .score-7, .score-8, .score-9, .score-10, .score-11, .score-12, .score-13, .score-14").droppable({
		drop: function(event, ui) {
		ui.draggable.empty();
		}
		});*/
		$(".thetiles").empty();
		start();
		console.log("The word tile on the board has be submitted and curned for ridden.");
		$("#the-error").text("");
		} else {
			$("#the-error").text("The error to message - " + "Except for the first letter, all sub-subsequent letters must be placed directly next to or below another letter with no space. Or there are no letter tiles on the board.");
		}
		arr0 = 0;
		arr1 = 0;
	}
	
	
	
	
});
