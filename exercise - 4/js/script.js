// those born in 1500's

var people = [
{
	name: 'kunika', surname: 'rathore', year: 1500, passed: 1589
},
{
	name: 'suhan', surname: 'bhati', year: 1400, passed: 1529
},
{
	name: 'vidu', surname: 'goswami', year: 1560, passed: 1689
},
{
	name: 'ankit', surname: 'goswami', year: 1660, passed: 1779
}];

/* =====================***********========================
========================   FILTER   =======================
========================***********======================== */



// normal method to filter without filter ===========  CUSTOM
for (var i = 0; i < 4; i++) {
	if(people[i].year >= 1500 && people[i].year < 1600){
        console.log(people[i]);
     }
}

// FILTER METHOD  ================================= FUNCTION
function born(date){
	if(date.year >= 1500 && date.year < 1600){
		return true; 
	}
}

var filtering = people.filter(born);
console.table(filtering);


/* =====================***********========================
========================   FILTER   =======================
========================***********======================== */

//------------------------------------------------------------------------------------------------------------------------------


/* =====================*********========================
========================   MAP   =======================
========================*********======================== */

// map returns the answer in an array
function names(naming){
 return naming.name + " " +naming.sirname;
}
var mapping = people.map(names);
console.log(mapping);

/* =====================*********========================
========================   MAP   =======================
========================*********======================== */

//------------------------------------------------------------------------------------------------------------------------------

/* =====================********========================
========================  sort  =======================
========================********======================== */

function birth(a, b){
if(a.year > b.year){
    return 1;
} else {
	return -1;
}
}

var sorting = people.sort(birth);
console.table(sorting);
/* =====================********========================
========================  sort  =======================
========================********======================== */

//------------------------------------------------------------------------------------------------------------------------------

/* =====================***********========================
========================   REDUCE  ========================
========================***********======================== */
var x = 0;
function reduce(total, date){
	return total + (date.passed - date.year);
}

var reducing = people.reduce(reduce, 0);
 console.log(reducing);
/* =====================***********========================
========================   REDUCE  ========================
========================***********======================== */


// ------------ ***** sort function according to the years lived ***** -----------------
function lived(a, b){

 var first = a.passed - a.year;
 var second = b.passed - b.year;

if(first > second){
   return 1;
}
}
var sortLived = people.sort(lived);

console.table(sortLived);

//---------------------------------------------------------------------------

//FINDING THE WORD THAT CONTAINS DE ---------------------------

// WE CAN USE BOTH OF THE  FOLLOWING 
//var categories = document.querySelector('mw-category');
//var anchor = document.querySelectorAll('a');
//                     OR
var categories = Array.from(document.querySelectorAll('.mw-category a'));

var check = categories.map(category => category.textContent);

console.log(check);

var ff = check.filter(name => name.includes('de'));
console.log(ff);

//---------------------------------------------------------------------------
var naming = [
'kunika, rathore', 'suhan, chati', 'dinesh, oathore', 'vish, bhati'
] 

// sorting alphabatically according to the last name

var lastName = naming.sort(function (firstPerson, nextPerson){
 var [aFst, aLst] = firstPerson.split(', ');
 var [bFst, bLst] = nextPerson.split(', ');
 return aLst > bLst ? 1 : -1;
});
  console.log(lastName);

//count the instances/vehicles
//---------------------------------------------------------------------------
var vehicels = ['car', 'truck', 'bus', 'train', 'truck', 'nano', 'bus', 'bus', 'train','car'];
var counts = vehicels.reduce(function (obj, vehc){
if(!obj[vehc]){
	obj[vehc] =0; 
}
obj[vehc]++;
return obj;
}, {});

console.log(counts);