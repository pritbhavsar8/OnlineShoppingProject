function demo(a,b=100)
{
    //demo2();
    // var total = a + b;
    // alert("Total : "+total);
    var t = demo2(a,b);
    alert("Total : "+t);
}

function demo2(x,y)
{
    var total = x + y;
    return total;
}

function checkstring()
{
    var str = "This is karon is karon          ";
    // var s = str.trim();
    // alert(s);
    //var ntext = str.replaceAll("karon","Test");
    //alert(ntext);
   // var t = str.toLowerCase();
   // alert(t);
    for(var i=0;i<str.length;i++)
    {
        alert(str[i]);
    }
   
   // var result = str.substr(-5);
   // alert(result);
    //var len  = str.length;
    //alert(len);
}