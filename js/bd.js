/**DADOS DOS PRODUTOS**/
const produtos = [
    {
         id: 1,
         nome: 'Arroz patriota 1kg',
         descricao: 'Alimento',
         preco: 1000,
         estoque: 7,
         vendas : 0,
         pratileira: 2,
         img_prod: 'img/loja_1/arroz.jpg'
    },
    {
         id: 2,
         nome: 'Compal  1L',
         descricao: 'Bebida',
         preco: 1500,
         estoque: 17,
         vendas : 0,
         pratileira: 3,
         img_prod: 'img/loja_1/compal.jpeg'
    },
    {
         id: 3,
         nome: 'Agua pura  500ml',
         descricao: 'Bebida',
         preco: 150,
         estoque: 12,
         vendas : 0,
         pratileira: 1,
         img_prod: 'img/loja_1/agua.jpg'
    },
    {
         id: 4,
         nome: 'Óleo alimo  1L',
         descricao: 'Alimentar',
         preco: 500,
         estoque: 10,
         vendas : 0,
         pratileira: 2,
         img_prod: 'img/loja_1/oleo.jpg'
    },
    {
         id: 5,
         nome: 'Açucar',
         descricao: 'Alimentar',
         preco: 500,
         estoque: 10,
         vendas : 0,
         pratileira: 2,
         img_prod: 'img/loja_1/acucar.jpg'
    },
    {
         id: 6,
         nome: 'Sampatito Yougueta',
         descricao: 'Alimentar',
         preco: 500,
         estoque: 10,
         vendas : 0,
         pratileira: 2,
         img_prod: 'img/loja_1/chugo_3.jpg'
    },
    {
         id: 7,
         nome: 'Farinha',
         descricao: 'Alimentar',
         preco: 500,
         estoque: 10,
         vendas : 0,
         pratileira: 2,
         img_prod: 'img/loja_1/farinha.jpeg'

    },
    {
         id: 8,
         nome: 'Coca Cola',
         descricao: 'Alimentar',
         preco: 500,
         estoque: 10,
         vendas : 0,
         pratileira: 2,
         img_prod: 'img/loja_1/grade gasosa.jpg'
    },
]

const categorias = [...new Set(produtos.map((item)=>{return item}))];
let i = 0;

//console.log(categorias)
document.getElementById("dadosPratileira").innerHTML  = categorias.map((itens)=>{
  var {id, nome, preco, estoque, img_prod} = itens;
  return(
    `<tr class=''>
      <td class=''>
        <div class='bd-highlight d-flex align-items-center position-relative'>
          <img src='${img_prod}' alt='${img_prod}' class='bd-placeholder-img flex-shrink-0 me-2 rounded img_produtos'>
            <div class='d-flex flex-column' style='width: 100%;'>
              <p class='col-12' style='margin-bottom: -1px;'>
                <strong class='d-block text-dark'>${nome}</strong>
              </p>
              <div class='d-flex align-items-center' style='margin-bottom: -15px;'>
                <p class='w-100' ><label for='' class='text-dark'>${estoque} Stock<br>${preco},00 Kz</label></p>
                <div class='p-2 flex-shrink-1 bd-highlight'>
                  <div class='btn-group'>
                    <label class='btn btn-outline-secondary  bb' data-bs-toggle='modal' data-bs-target='#exampleModalDefault'><i class='bi bi-bag-check-fill'></i></label>
                    <input type='checkbox' class='btn-check btn-sm' id='btn-check-outlined${id}' autocomplete='off'>`
                    +"<label class='btn btn-outline-secondary  bb' for='btn-check-outlined"+id+"'  onclick='AddCarrinho("+(i++)+")'><i class='bi bi-cart-check-fill'></i></label>"+
                    `
                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>`
  )
}).join('');

var carinho = [];

function AddCarrinho(a){
    carinho.push({...categorias[a]});
    mostraCarrinho();
}

function delItemCar(a){
    carinho.splice(a, 1);
    mostraCarrinho();
}

function mostraCarrinho(a){
    let j = 0, total=0;

    document.getElementById("contaCarinho").innerHTML = carinho.length;
    if(carinho.length == 0){
        document.getElementById("carrinhocompras").innerHTML = "<h3 class='text-center'>Seu carinho esta vasio</h3>";
        document.getElementById("total").innerHTML = "$ "+0+" .00";
    } else{
        document.getElementById("carrinhocompras").innerHTML = carinho.map((itens)=>{
            //var {image, title, price}  =items;
            var {id, nome, preco, estoque, img_prod} = itens;
            total=total+preco;
            document.getElementById("total").innerHTML = "$ "+total+" .00";
            return (
                `
                <tr>
                <td>
                  <div class='d-flex text-muted pt-1 destaques small lh-sm border-bottom linha_produtos'>
                    <img src='${img_prod}' alt='${img_prod}' class='bd-placeholder-img flex-shrink-0 me-2 rounded img_produtos' style='width: 65px; height: 65px;'>
                    <div class='pb-3 mb-0 row w-100' style='margin-bottom: -1px;'>
                      <p class='col-12'>
                        <strong class='d-block text-dark'>${nome}</strong>
                      </p>
                      <div class='d-flex align-items-center justify-content-around col-12' style='margin-bottom: -15px;'>
                        <label for='' class='text-dark'>${estoque} Stock<br>${preco},00 Kz</label>

                        <input type='number' class='' id='validationDefault03' value='1' style='max-width: 55px;'>`
                        +"<a href='#'  style='font-size: 21px;' class='eliminar' onclick='delItemCar("+ (j++) +")'>"+
                          `<i class='text-danger bi bi-trash-fill'></i>
                        </a>
                      </div>
                    </div>

                  </div>
                </td>
                </tr>
                `
            )
        }).join()
    }
}
