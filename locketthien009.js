// ========= ID ========= //
const mapping = {
    '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
    'Locket': ['Gold']
  };
  // =========   Phần cố định  ========= // 
  // =========  @Phùng Trí Thiện 009 ========= // 
  // ========= Facebook : Phùng Trí Thiện (Depi) ==========//
  //========== Cấm Thằng Nào Share ==============//
  var ua=$request.headers["User-Agent"]||$request.headers["user-agent"],obj=JSON.parse($response.body);obj.Attention="Bản Này Độc Quyển Của Trí Thiện 2009";var thien009={is_sandbox:!1,ownership_type:"PURCHASED",billing_issues_detected_at:null,period_type:"normal",expires_date:"2099-12-18T01:04:17Z",grace_period_expires_date:null,unsubscribe_detected_at:null,original_purchase_date:"2024-08-25T01:04:18Z",purchase_date:"2024-08-25T01:04:17Z",store:"app_store"},Trithien009={grace_period_expires_date:null,purchase_date:"2024-08-25T01:04:17Z",product_identifier:"com.thien009.premium.yearly",expires_date:"2099-12-18T01:04:17Z"};const match=Object.keys(mapping).find(e=>ua.includes(e));if(match){let[e,s]=mapping[match];s?(Trithien009.product_identifier=s,obj.subscriber.subscriptions[s]=thien009):obj.subscriber.subscriptions["com.thien009.premium.yearly"]=thien009,obj.subscriber.entitlements[e]=Trithien009}else obj.subscriber.subscriptions["com.thien009.premium.yearly"]=thien009,obj.subscriber.entitlements.pro=Trithien009;$done({body:JSON.stringify(obj)});
