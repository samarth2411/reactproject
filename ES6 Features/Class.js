// class keyword introduced in ES6
// in order to create objects we used functions before ES6

class Train{
    constructor(T_fname,T_lname){
        this.T_fname = T_fname;
        this.T_lname = T_lname;
    }
    // \n = it gives the next Line
    display=()=>console.log(`Train FName: ${this.T_fname}\nTrain Lname: ${this.T_lname}`)
}

let obj = new Train("Pankaj","Kapoor")
obj.display();



// ES5 way to create class

function Train2(){
    this.T_fname;
    this.T_lname;

    this.display()
    {
        console.log(this.T_fname)
    }
}