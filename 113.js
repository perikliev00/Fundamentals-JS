class Storage {
    constructor(capacity) {
        this.arr=[];
        this.capacity=capacity;
        this.totalCost=0
        this.storage={};
           }
       addProduct(obj) {
        this.storage=obj
        this.arr.push(obj);
        this.capacity=this.capacity-obj.quantity;
        this.totalCost=this.totalCost+obj.price*obj.quantity;
       }
       getProducts() {
        let jsonArr=[];
        for(let i=0;i<this.arr.length;i++) {
            jsonArr.push(JSON.stringify(this.arr[i]));
        }
        return jsonArr.join("\n");
       }
}