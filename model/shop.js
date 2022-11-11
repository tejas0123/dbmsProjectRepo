
const db=require('../util/database');


module.exports = class Product{
    static fetchAll(){
        return db.execute('select * from Cars');
    }
    static search(carname){
        return db.execute(`select * from Cars where name='${carname}'`);
    }
    static filter(range,category,Fuel){
        let R=range.split("-");
        R[0]=parseInt(R[0]);
        R[1]=parseInt(R[1]);
        
        return db.execute(`select * from Cars where price>=${R[0]} and price<=${R[1]} and category='${category}' and fuel_type='${Fuel}'`);
    }
    static getById(id)
    {
        return db.execute(`select * from Cars where id=${id}`);
    }
    static getByname(carname)
    {   
        if(carname=='BMW')
        return db.execute(`select * from specifications where carname='BMW'`);
        else
        return db.execute(`select * from specifications where carname='${carname}'`);

    }
    static getcars(car1,car2,cat1,cat2)
    {
        
        return db.execute(`select * from specifications where carname in ('${car1}','${car2}') and category in ('${cat1}','${cat2}')`);
    }
    static sort(id)
    {
        if(id==1)
        {
            return db.execute(`select * from Cars order by price`);
        }
        else if(id==2)
        {
            return db.execute(`select * from Cars order by price desc`);
        }
        else if(id==3)
        {
            return db.execute(`select * from Cars order by year_launched`);
        }
        else
        {
            return db.execute(`select * from Cars order by year_launched desc`);
        }
    }
    static adduser(req,hashedPW,rand)
    {
            return db.execute(`insert into Customers values('${req.body.firstname}','${req.body.lastname}', '${req.body.username}', '${hashedPW}','${req.body.address}','${req.body.firstname+rand}')`);   
   }
   static login(req)
   {
    
    
    const pw = req.body.password;
    return db.execute(`select password from Customers where emailid = ('${req.body.username}')`);           
    }
        static brands(brand)
        {
            
            return db.execute(`select name, model, price,images from Cars where brand = '${brand}'`)
        }
    static book(name)
    {  
        return db.execute(`select name,brand, model, price, colours, fuel_type from Cars where name = '${name}'`);
    }
    static user(user)
    {   
        return db.execute(`select firstname, lastname, ID from Customers where emailid = '${user}'`);
    }
    static placeBooking(carname,brand,model,price,payment_mode,colour,cust_name,fuel_type,ID)
    {
       
        return db.execute(`insert into Bookings values('${carname}', '${brand}', '${model}', '${price}','${payment_mode}', curdate(), '${colour}', DATE_ADD(curdate(), INTERVAL 1 MONTH), '${cust_name}', '${fuel_type}', '${ID}')`);
    }
    static getcart(user)
    {
        return db.execute(`select * from bookings b,customers c where b.cust_id=c.Id and c.emailid='${user}'`);
    }
}