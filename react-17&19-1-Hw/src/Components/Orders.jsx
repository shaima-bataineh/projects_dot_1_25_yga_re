// H.W 19-1 Mon


import { useEffect, useState } from "react";
// استيراد ايقونات لعرضها في الكرت
import { FaFileInvoiceDollar, FaUser, FaBox } from "react-icons/fa";

function Orders() {
  // استخدام استيت  لتخزين بيانات الطلبات
  const [orders, setOrders] = useState([]);
  //لمعرفة اذا  البيانات لسا بتتحملstate
  const [loading, setLoading] = useState(true);
  //لنخزن رسالة الخطا في حال فشل جلب البيانات 
  const [error, setError] = useState(null);
   
  // تتنفذ مرة وحدة عند تحميل الصفحة 
  useEffect(() => {
    //جلب البيانات من خارجيAPI 
    fetch("https://dummyjson.com/carts")
      .then(res => {

        // اذا فشل الاتصال 
        if (!res.ok) throw new Error("Failed to fetch orders");
        return res.json();
      })
      .then(data => {
        //نخزن البيانات في state
        setOrders(data.carts);
        // ايقاف التحميل
        setLoading(false);
      })
      .catch(err => {
        //تخزين رسالة الخطا
        setError(err.message);
        //نوقف التحميل
        setLoading(false);
      });
  }, []); // تعني انه الكود حيعمل مرة واحدة فقط[]

//خلال التحميل  عرض رسالة انه عم يتحمل الاوردرز
  if (loading) return <h2 className="loading">Loading orders...</h2>;
  //عرض رسالة الخطا اذا فشل التحميل
  if (error) return <h2 className="error">Error: {error}</h2>;
 // اذا نجح التحميل يعرض البيانات
  return (
    <div className="orders">
      <h2>Sales Orders</h2>

      <div className="orders-grid">
        {orders.map(order => (
          // كرت خاص بكل طلب 
          <div className="order-card" key={order.id}>
            
            {/* راس الكرت:ايقونة + رقم الطلب */}
            <div className="order-header">
              <FaFileInvoiceDollar className="order-icon" />
              <h3>Order #{order.id}</h3>
            </div>
            
            {/* اجمالي قيمة الطلب */}
            <p className="total">
              ${order.total.toLocaleString()}
            </p>

            <div className="order-info">
              <span><FaBox /> {order.products.length} Items</span>
              <span><FaUser /> User {order.userId}</span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
