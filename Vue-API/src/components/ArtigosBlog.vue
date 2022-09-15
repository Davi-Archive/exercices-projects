<template>
    <div class="hello">
        <form class="form" v-on:submit.prevent="onSubmit">
            <p>
                <input type="text" placeholder="texto" class="entrada" v-model="artigo.msg"/>
            </p>
            <button class="success" v-bind:onclick="cadastrarArtigos">Enviar</button>
        </form>
        <p>{{cadastro}}</p>
        <h1>POSTS ABAIXO</h1>
        <div class="card">
            <div class="post" v-for="artigo in artigos" v-bind:key="artigo.id">
                <h3>{{artigo.title}}</h3>
                <p>{{artigo.id}}</p>
                <p>{{artigo.headline}}</p>
            </div>
        </div>
    </div>

</template>

 <!-- {
                    id: 1,
                    titulo: 'Primeiro titulo',
                    conteudo: 'Conteudo desse artigo',
                },
                {
                    id: 2,
                    titulo: 'Segundo titulo',
                    conteudo: 'Conteudo desse artigo',
                },
                {
                    id: 3,
                    titulo: '3 titulo',
                    conteudo: 'Conteudo desse artigo',
                },
                {
                    id: 4,
                    titulo: '4 titulo',
                    conteudo: 'Conteudo desse artigo',
                }, -->


<script>
export default {
    name: 'ArtigosBlog',
    data() {
        return {
            cadastro: '',
            artigos: [],
            artigo: {
                msg: ''
            }
        }
    },
    methods: {
        fetchArtigos() {
            fetch('https://api.beta.mejorconsalud.com/wp-json/mc/v2/posts?search=calabazas')
                .then((res) => res.json())
                .then((res) => {
                    this.artigos = res.data;
                })
                .catch(err => console.log(err))
        },
        cadastrarArtigos() {
            if(!this.artigo.msg){
                this.cadastro = 'preencha o box'
            } else {

                this.cadastro = 'okaychamp'
            fetch('https://60d84cd8-4ef0-4864-89aa-583d396d153e.mock.pstmn.io', {
                method: 'POST',
                body: JSON.stringify(this.artigo),
                headers: {
                    'content-type': 'application/json'
                }
            }).then(res => res.json())
        }
        }
    },
    created() {
        this.fetchArtigos()
    }
}
</script>

<style>
.hello {
    padding: 10px;
    border: 3px solid red;
}

.post {
    padding: 10px;
    border: 3px solid gray;
}

.success {
    padding: 20px;
    margin: 5px;
}

.entrada {
    padding: 10px;
    font-size: 1rem;
}
</style>