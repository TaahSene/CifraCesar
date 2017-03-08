Vue.component('cesar-encrypt',{
	
	template: '<div class="ui container" id="vue"><div class="ui grid"> <div class="eight wide column"> <p> Cifra de Cesar</p><div class="ui form"><div class="field"><label>Frase para Criptografia</label><textarea rows="2" v-model="frase"></textarea></div><div class="field"><label>Texto que deseja criptografar</label><textarea v-model="message"></textarea></div><button class="positive ui right floated button" v-on:click="encryptMessage">Criptografar</button></div></div><div class="eight wide column"> <br><div class="ui purple segment" v-show="result" v-model="encrypt" style="display:none">{{encrypt}}</div></div></div></div>',
	
	data: function () {
		return {
		  	frase:'',
		  	message:'',
		  	alfabeto: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
		  	encrypt: '',
		  	result: false
		  }
	},
  	
  	methods: {
	    encryptMessage: function () {

			var message = this.message.toLowerCase();
			var off = this.displacement();
			var x = parseInt(off);
			var keep = [];

			for (var i = 0; i < message.length; i++){
			  if(message[i] != ' '){
			    for (var j = 0; j < this.alfabeto.length; j++){
			      if (message[i] == this.alfabeto[j]){
			        keep[i] = this.alfabeto[(j + x) % this.alfabeto.length];
			        break;
			      }
			    }
			  }else{
			    keep[i] = ' ';
			  }
			}
			this.encrypt = keep.join("");
			this.result = true;
		},
		displacement: function () {

			possition =[];
			for (var i = 0 ; i < this.frase.length; i++) {
				for (var j = 0; j < this.alfabeto.length; j++) {
					if(this.frase[i] == this.alfabeto[j]){
						possition.push(j);
					}
				}
			}

			sum = possition.reduce((a, b) => a + b, 0);
			displacement = sum/possition.length; 	
			return parseInt(displacement);
		}
	}
})