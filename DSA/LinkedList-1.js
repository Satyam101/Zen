// // To Create the new Node-----------
// class Node {
//     constructor(element) {
//         this.element = element;
//         this.next = null;
//     }
// }

// //Linked list creation------------
// class LinkedListProg {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     addAtLast(elem) {    //----At Last---------

//         var newNode = new Node(elem);             //creation of newNode
//         var temp;
//         if ((this.head == null)) {
//             this.head = newNode;
//         }
//         else {

//             temp = this.head;

//             while (temp.next != null) {

//                 temp = temp.next;
//             }
//             temp.next = newNode;
//             newNode.next = null;
//         }


//     }


//     addAtfirst(elem) {      //------------Add At First index

//         var newNode = new Node(elem);

//         var temp;
//         if (this.head == null) {
//             this.head = newNode;
//         }
//         else {

//             newNode.next = this.head;
//             this.head = newNode;
//         }
//     }





//     addAtGivenIndex(elem, index) {     //---------Add at given index
//         if (index < 0 && index > this.size) {
//             return false;
//         }
//         else {
//             var newNode = new Node(elem);
//             var temp;
//             var i = 0;
//             if (index == 0) {
//                 newNode.next = this.head;
//                 this.head = newNode;
//             }
//             else {
//                 temp = this.head;
//                 while (i < index - 1) {
//                     temp = temp.next;
//                     i++;
//                 }
//                 newNode.next = temp.next;
//                 temp.next = newNode;
//             }
//         }
//     }

//     deleteAtGivenIndex(index) {    //----------Delete at given index

//         if (index < 0 && index > this.size) {

//             return false;

//         }
//         else {

//             var i = 0;
//             var temp;
//             temp = this.head;
//             if (index == 0) {
//                 this.head = temp.next;
//             } else {

//                 while (i < index - 1) {
//                     i++;
//                     temp = temp.next;
//                 }
//                 temp.next = temp.next.next;
//             }
//             this.size++;
//         }


//     }


//     middleElement() {      //middle element from Linked List

//         var fast;
//         var slow;
//         fast = this.head;
//         slow = this.head;

//         while (fast.next !== null && fast.next.next !== null) {

//             slow = slow.next;
//             fast = fast.next.next;

//         }

//         console.log(slow.element)


//     }

//     removeduplicate(){

//         var temp, later;
//         temp=this.head;
//         later=temp.next;

//         while(temp!=null)
//         {

//         if(temp.element===later.element){

//             temp.next


//         }
//         }
//     }





//     printList() {        //--print the list

//         var temp;
//         temp = this.head;
//         var str = "";
//         while (temp != null) {
//             str += temp.element + " ";
//             temp = temp.next;
//         }
//         console.log(str);

//     }


// }//class

// let l1 = new LinkedListProg();

// l1.addAtLast(30);
// l1.addAtLast(40);
// l1.addAtLast(50);
// l1.addAtLast(60);
// l1.addAtLast(70);
// l1.addAtfirst(20);
// l1.addAtfirst(10);
// // l1.addAtGivenIndex(70, 6);
// // l1.printList();

// // l1.deleteAtGivenIndex(6);
// l1.printList();

// l1.middleElement();