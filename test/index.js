// let obj={nam:'hh' , age:12}
// let {age:a}=obj
// console.log(a);

// let arr=[1,2,3,'hhjj']
// let [k,j,b,[...h]]=arr
// console.log(h.join(''));


// let arr=[1,2,3,'hhjj',3]
// let [k,j,b,[...h]]=arr
// console.log(arr.lastIndexOf(3));
// console.log(arr.indexOf(3));


// let arr=[1,2,3,'hhjj',3,100]
// let [k,j,b,[...h]]=arr
// // console.log(arr.includes(2) ? 'yes' : 'noo');
// console.log(arr.sort());


// let arr=[1,2,3,'hhjj',3,100]
// let Smiya=(arr)=>console.log(arr[3]);
// Smiya(arr)





// let isvali=false
// let good="mzyan"
// let notgood="qawdtiha"
// console.log(isvali ?good : notgood);



// let ismembre=false
// let remise=ismembre==true ?0.2 :0.1
// console.log("remise is :",remise);



// let nom ="yusf"
// let salutation =nom?"salut " + nom :"inconue"
// console.log(salutation);



            //Object destructing


// let formateur ={
//     nom : "nadir",
//     filiere : "dev",
//     ville : "mohammedia"
// }
// let nom=formateur.nom      
// let filiere=formateur.filiere      
// let ville=formateur.ville 
// console.log(nom,filiere,ville);

//blast ma gha nkhadmo b hadi ankhadmo b hadi
 
// let {nom,ziyada="yusf",filiere,ville:lmdina}=formateur
// console.log(nom,ziyada,filiere,lmdina); //hna dik ziyada yaeni imkan lik tzid aya haja bghety f objet b dik tariqa
// w ila bghety tbadl smiya ka dir hda chi proprieter :oka der smiya li bghety tbadal kma drna f ville




// const person = {
//     name: 'Sara',
//     address: {
//       city: 'Rabat',
//       zip: 10000
//     }
//   };

// let {address :{city:mdena,zip,enpluspro=1212}}=person
// console.log(mdena,zip,enpluspro); //hadi ghi ila kan objet wast objet

     




let formateur ={
    nom : "nadir",
    filiere : "dev",
    ville : "mohammedia"
}
function affichevalu({nom,filiere,ville}){
    console.log(nom,filiere,ville);
}
affichevalu(formateur);



// let formateur ={
//     nom : "nadir",
//     filiere : "dev",
//     ville : "mohammedia"
// }

// function showinfo({nom,filiere,ville}){
//     console.log(nom,filiere,ville);
// }
// showinfo(formateur);

















// // destructing 


// // const arr =  [1,2,3,4] ;


// // let [,,,d] = arr ; 

// // console.log(d);


// const obj  = {name1 : 'jana' , arr : [1,2,3,4]}

// let {name1 ,  arr:[,,,a] } = obj 

// console.log(a);







// const obj  =  {
//      age : 20  , 
//      arr : [ 1 , 2 , {age2 : 21} ] , 
// }



// let {age , arr:[,,{age2}]} = obj 

// console.log(age2);


// spread
