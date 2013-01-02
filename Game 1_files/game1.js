$(document).ready(function() {
	// do stuff when DOM is ready
	Array.prototype.remove= function(){
    var what, a= arguments, L= a.length, ax;
    while(L && this.length){
        what= a[--L];
        while((ax= this.indexOf(what))!= -1){
            this.splice(ax, 1);
        }
    }
    return this;
}
	
	window.assetStats = {
		head1: {
			health: 200,
			strength: 5,
			agility: 5,
			precision: 15,
			fire: 0,
			water: 10,
			grass: 30,
			ability: {
				name: 'Photosynthesis',
				attack: function(myself, opponent) {
					window[ myself ].damage -= window[ myself ].grass * (( 100 - window[ opponent ].fire + window[ opponent ].water ) / 100);
					window.updateDamage( myself );
		}}},
		head2: {
			health: 150,
			strength: 10,
			agility: 25,
			precision: 30,
			fire: 0,
			water: 10,
			grass: 0,
			ability: {
				name: 'Peck',
				attack: function(myself, opponent) {
					window[ opponent ].damage += window[ myself ].strength * ((100 - window[ opponent ].agility + window[ myself ].precision) / 100 );
					window.updateDamage( opponent );
		}}},
		head3: {
			health: 200,
			strength: 30,
			agility: 10,
			precision: 0,
			fire: 30,
			water: 0,
			grass: 0,
			ability: {
				name: 'Flaming Head Butt',
				attack: function(myself, opponent) {
					window[ opponent ].damage += ( 0.6 * window[ myself ].strength * ((100 - window[ opponent ].agility + window[ myself ].precision) / 100 )) + ( 0.4 * window[ myself ].fire * (( 100 - window[ opponent ].water + window[ opponent ].grass) / 100 ));
					window.updateDamage( opponent );
		}}},
		head4: {
			health: 200,
			strength: 15,
			agility: 5,
			precision: 15,
			fire: 0,
			water: 35,
			grass: 0,
			ability: {
				name: 'Bubble Blaster',
				attack: function(myself, opponent) {
					window[ opponent ].damage += 1 * window[ myself ].water * (( 100 - window[ opponent ].grass + window[ opponent ].fire) / 100 );
					window.updateDamage( opponent );
		}}},
		head5: {
			health: 150,
			strength: 20,
			agility: 10,
			precision: 20,
			fire: 0,
			water: 10,
			grass: 25,
			ability: {
				name: 'Nose Stab',
				attack: function(myself, opponent) {
					window[ opponent ].damage += ( 0.8 * window[ myself ].strength * ((100 - window[ opponent ].agility + window[ myself ].precision) / 100 )) + ( 0.2 * window[ myself ].grass * (( 100 - window[ opponent ].fire + window[ opponent ].water) / 100 ));
					window.updateDamage( opponent );
		}}},
		body1: {
			health: 150,
			strength: 15,
			agility: 25,
			precision: 10,
			fire: 0,
			water: 0,
			grass: 25,
			ability: {
				name: 'Green Thumb',
				attack: function(myself, opponent) {
					window[ opponent ].damage += ( 0.4 * window[ myself ].strength * ((100 - window[ opponent ].agility + window[ myself ].precision) / 100 )) + ( 0.6 * window[ myself ].grass * (( 100 - window[ opponent ].fire + window[ opponent ].water) / 100 ));
					window.updateDamage( opponent );
		}}},
		body2: {
			health: 150,
			strength: 20,
			agility: 15,
			precision: 15,
			fire: 0,
			water: 25,
			grass: 0,
			ability: {
				name: 'Water Slap',
				attack: function(myself, opponent) {
					window[ opponent ].damage += ( 0.5 * window[ myself ].strength * ((100 - window[ opponent ].agility + window[ myself ].precision) / 100 )) + ( 0.5 * window[ myself ].water * (( 100 - window[ opponent ].grass + window[ opponent ].fire) / 100 ));
					window.updateDamage( opponent );
		}}},
		body3: {
			health: 200,
			strength: 25,
			agility: 0,
			precision: 10,
			fire: 35,
			water: 0,
			grass: 0,
			ability: {
				name: 'Fire Fist',
				attack: function(myself, opponent) {
					window[ opponent ].damage += ( 0.2 * window[ myself ].strength * ((100 - window[ opponent ].agility + window[ myself ].precision) / 100 )) + ( 0.8 * window[ myself ].fire * (( 100 - window[ opponent ].water + window[ opponent ].grass) / 100 ));
					window.updateDamage( opponent );
		}}},
		body4: {
			health: 300,
			strength: 10,
			agility: 0,
			precision: 0,
			fire: 0,
			water: 30,
			grass: 0,
			ability: {
				name: 'Sponge Bath',
				attack: function(myself, opponent) {
					window[ opponent ].damage += ( 1.5 * window[ myself ].water * (( 100 - window[ opponent ].grass + window[ opponent ].fire) / 100 ));
					window[ myself ].damage += ( 0.5 * window[ myself ].water * (( 100 - window[ myself ].grass + window[ myself ].fire) / 100 ));
					window.updateDamage( opponent );
					window.updateDamage( myself );
		}}},
		body5: {
			health: 150,
			strength: 30,
			agility: 10,
			precision: 20,
			fire: 0,
			water: 0,
			grass: 25,
			ability: {
				name: 'Raking Branches',
				attack: function(myself, opponent) {
					window[ opponent ].damage += 1 * window[ myself ].strength * ((100 - window[ opponent ].agility + window[ myself ].precision) / 100 );
					window.updateDamage( opponent );
		}}},
		feet1: {
			health: 150,
			strength: 25,
			agility: 20,
			precision: 5,
			fire: 0,
			water: 0,
			grass: 25,
			ability: {
				name: 'Root Kick',
				attack: function(myself, opponent) {
					window[ opponent ].damage += ( 0.8 * window[ myself ].strength * ((100 - window[ opponent ].agility + window[ myself ].precision) / 100 )) + ( 0.2 * window[ myself ].grass * (( 100 - window[ opponent ].fire + window[ opponent ].water) / 100 ));
					window.updateDamage( opponent );
		}}},
		feet2: {
			health: 100,
			strength: 15,
			agility: 35,
			precision: 10,
			fire: 0,
			water: 25,
			grass: 0,
			ability: {
				name: 'Surf Splash',
				attack: function(myself, opponent) {
					window[ opponent ].damage += ( 0.1 * window[ myself ].strength * ((100 - window[ opponent ].agility + window[ myself ].precision) / 100 )) + ( 0.9 * window[ myself ].water * (( 100 - window[ opponent ].grass + window[ opponent ].fire) / 100 ));
					window.updateDamage( opponent );
		}}},
		feet3: {
			health: 250,
			strength: 35,
			agility: 0,
			precision: 0,
			fire: 10,
			water: 0,
			grass: 0,
			ability: {
				name: 'Lazy Ass',
				attack: function(myself, opponent) {
					window[ myself ].damage -= ( 1 * window[ myself ].strength * ((100 - window[ opponent ].agility + window[ myself ].precision) / 100 ));
					window.updateDamage( myself );
		}}},
		feet4: {
			health: 50,
			strength: 0,
			agility: 35,
			precision: 35,
			fire: 0,
			water: 25,
			grass: 0,
			ability: {
				name: 'Skinny Legs',
				attack: function(myself, opponent) {
					window[ opponent ].damage += 0.5 * window[ myself ].precision * ((100 - window[ opponent ].agility + window[ myself ].precision) / 100 );
					window.updateDamage( opponent );
		}}},
		feet5: {
			health: 150,
			strength: 15,
			agility: 0,
			precision: 25,
			fire: 0,
			water: 0,
			grass: 35,
			ability: {
				name: 'Leeching Roots',
				attack: function(myself, opponent) {
					window[ opponent ].damage += 0.5 * window[ myself ].grass * (( 100 - window[ opponent ].fire + window[ opponent ].water) / 100 );
					window[ myself ].damage -= 0.5 * window[ myself ].grass * (( 100 - window[ opponent ].fire + window[ opponent ].water) / 100 );
					window.updateDamage( opponent );
					window.updateDamage( myself );
	}}}};

	window.character = {
		damage: 0,
		head: 'head2',
		body: 'body2',
		feet: 'feet2',
		health: 0,
		strength: 0,
		agility: 0,
		precision: 0,
		fire: 0,
		water: 0,
		grass: 0,
		headAssets: [ 'head2' ],
		bodyAssets: [ 'body2' ],
		feetAssets: [ 'feet2' ]
	};
	
	window.enemy = {
		head: 'head1',
		body: 'body1',
		feet: 'feet1',
		damage: 0,
		health: 0,
		strength: 0,
		agility: 0,
		precision: 0,
		fire: 0,
		water: 0,
		grass: 0,
		headAssets: [ 'head1', 'head3', 'head4', 'head5' ],
		bodyAssets: [ 'body1', 'body3', 'body4', 'body5' ],
		feetAssets: [ 'feet1', 'feet3', 'feet4', 'feet5' ]
	};
	
	window.statTypes = [
		'health',
		'strength',
		'agility',
		'precision',
		'fire',
		'water',
		'grass'
	];
	
	window.randAsset = function( charType, assetType ) {
		var tempArray = window[ charType ][ assetType + 'Assets' ]
		var newAsset = tempArray[ Math.floor( Math.random() * tempArray.length )];
		$( '#' + charType + assetType ).html( '<div class="draggable ' + newAsset + '"></div>' );
		window[ charType ][ assetType ] = $( '#' + newAsset ).attr( 'id' );
		window.updateStats( charType );
		window.updateAbilities();
	};
	
	window.updateStats = function( whoUpdated ) {
		for ( var thisStat=0; thisStat<window.statTypes.length; thisStat++ ) {
			var tempStat = window.statTypes[ thisStat ];
			window[ whoUpdated ][ tempStat ] = window.assetStats[ window[ whoUpdated ].head ][ tempStat ] + window.assetStats[ window[ whoUpdated ].body ][ tempStat ] + window.assetStats[ window[ whoUpdated ].feet ][ tempStat ]
			$( '.' + tempStat + '.' + whoUpdated ).html( window[ whoUpdated ][ tempStat ] );
		}
	};
	
	window.updateAbilities = function() {
		$( '#headAbility' ).html( window.assetStats[ window.character.head ].ability.name );
		$( '#bodyAbility' ).html( window.assetStats[ window.character.body ].ability.name );
		$( '#feetAbility' ).html( window.assetStats[ window.character.feet ].ability.name );
	};
	
	window.updateDamage = function( whoDamaged ) {
		$( '.' + whoDamaged + '.damage' ).html( Math.floor( 100 * ( window[ whoDamaged ].damage / window[ whoDamaged ].health )) + "%" );
	};
	
	window.testDamage = function() {
		if (window.enemy.damage >= window.enemy.health) {
			window.enemy.damage = 0;
			window.character.damage = 0;
			window.updateDamage( 'character' );
			window.updateDamage( 'enemy' );
			alert( "You defeated the enemy!" );
			$('.charedit').removeClass( 'hidden' );
			$('.fight').addClass( 'hidden' );
			var tempArray = [ 'head', 'body', 'feet' ];
			var tempPart = tempArray[ Math.floor( Math.random() * 3 )];
			window.character[ tempPart + 'Assets' ].push( window.enemy[ tempPart ]);
			$( '.' + window.enemy[ tempPart ]).removeClass( 'hidden' );
			window.enemy[ tempPart + 'Assets' ].remove( window.enemy[ tempPart ]);
		} else if (window.character.damage >= window.character.health) {
			window.enemy.damage = 0;
			window.character.damage = 0;
			window.updateDamage( 'character' );
			window.updateDamage( 'enemy' );
			alert( "You were defeated!" );
			$('.charedit').removeClass( 'hidden' );
			$('.fight').addClass( 'hidden' );
		} else {
			
		}
	};
	
	window.enemyAttack = function() {
		var tempArray = [ 'head', 'body', 'feet' ];
		window.assetStats[ window.enemy[ tempArray[ Math.floor( Math.random() * 3 )]]].ability.attack('enemy', 'character');
	};

	for ( var thisAsset=0; thisAsset<window.character.headAssets.length; thisAsset++ ) {
		$( '#' + window.character.headAssets[thisAsset] ).removeClass( 'hidden' );
	}
	for ( var thisAsset=0; thisAsset<window.character.bodyAssets.length; thisAsset++ ) {
		$( '#' + window.character.bodyAssets[thisAsset] ).removeClass( 'hidden' );
	}
	for ( var thisAsset=0; thisAsset<window.character.feetAssets.length; thisAsset++ ) {
		$( '#' + window.character.feetAssets[thisAsset] ).removeClass( 'hidden' );
	}
	
	$( '.draggable' ).draggable({ helper: 'clone' });
	
	$( '#characterhead' ).droppable({
		accept: '.head',
		drop: function( event, ui ) {
		$( this )
			.html( ui.draggable.clone() );
			window.character.head = ui.draggable.attr( 'id' );
			window.updateStats('character');
			window.updateAbilities();
	}});
	
	$( '#characterbody' ).droppable({
		accept: '.body',
		drop: function( event, ui ) {
		$( this )
			.html( ui.draggable.clone() );
			window.character.body = ui.draggable.attr( 'id' );
			window.updateStats('character');
			window.updateAbilities();
	}});
	
	$( '#characterfeet' ).droppable({
		accept: '.feet',
		drop: function( event, ui ) {
		$( this )
			.html( ui.draggable.clone() );
			window.character.feet = ui.draggable.attr( 'id' );
			window.updateStats('character');
			window.updateAbilities();
	}});

	$( '#randomize' ).click( function(){
		window.randAsset( 'character', 'head' );
		window.randAsset( 'character', 'body' );
		window.randAsset( 'character', 'feet' );
	});
	
	$( '#fight' ).click( function(){
		window.randAsset( 'enemy', 'head' );
		window.randAsset( 'enemy', 'body' );
		window.randAsset( 'enemy', 'feet' );	
		$('.charedit').addClass( 'hidden' );
		$('.fight').removeClass( 'hidden' );
	});
	
	$( '#headAbility' ).click( function(){
		window.assetStats[ window.character.head ].ability.attack('character', 'enemy');
		window.enemyAttack();
		window.testDamage();
	});
	
	$( '#bodyAbility' ).click( function(){
		window.assetStats[ window.character.body ].ability.attack('character', 'enemy');
		window.enemyAttack();
		window.testDamage();
	});
	
	$( '#feetAbility' ).click( function(){
		window.assetStats[ window.character.feet ].ability.attack('character', 'enemy');
		window.enemyAttack();
		window.testDamage();
	});
	
	window.randAsset( 'character', 'head' );
	window.randAsset( 'character', 'body' );
	window.randAsset( 'character', 'feet' );

});