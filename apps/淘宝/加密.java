package tb;

import android.content.Context;
import android.support.annotation.NonNull;
import anet.channel.strategy.dispatch.DispatchConstants;
import com.alibaba.wireless.security.open.SecException;
import com.alibaba.wireless.security.open.SecurityGuardManager;
import com.alibaba.wireless.security.open.SecurityGuardParamContext;
import com.alibaba.wireless.security.open.avmp.IAVMPGenericComponent;
import com.alibaba.wireless.security.open.middletier.IMiddleTierGenericComponent;
import com.alibaba.wireless.security.open.middletier.IUnifiedSecurityComponent;
import com.alibaba.wireless.security.open.middletier.fc.IFCComponent;
import com.alibaba.wireless.security.open.securitybody.ISecurityBodyComponent;
import com.alibaba.wireless.security.open.umid.IUMIDComponent;
import com.alibaba.wireless.security.open.umid.IUMIDInitListenerEx;
import com.android.alibaba.ip.runtime.InstantReloadException;
import com.android.alibaba.ip.runtime.IpChange;
import com.taobao.login4android.biz.alipaysso.AlipayConstant;
import com.taobao.tao.remotebusiness.login.f;
import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Map;
import mtopsdk.common.util.HttpHeaderConstant;
import mtopsdk.common.util.StringUtils;
import mtopsdk.common.util.TBSdkLog;
import mtopsdk.mtop.domain.EnvModeEnum;
import mtopsdk.mtop.global.MtopConfig;
import mtopsdk.mtop.global.SwitchConfig;
import mtopsdk.mtop.util.MtopSDKThreadPoolExecutorFactory;
import mtopsdk.security.util.SignStatistics;
import mtopsdk.security.util.b;
import mtopsdk.xstate.a;
import tb.llk;

/* compiled from: Taobao */
public class lll extends llj {
    public static volatile transient /* synthetic */ IpChange $ipChange;
    private SecurityGuardManager c = null;
    private volatile IAVMPGenericComponent.IAVMPGenericInstance d;
    private IMiddleTierGenericComponent e = null;
    private IUnifiedSecurityComponent f = null;

    static {
        fga.a(1927868033);
    }

    public static /* synthetic */ Object ipc$super(lll lll, String str, Object... objArr) {
        switch (str.hashCode()) {
            case -878196309:
                super.a(objArr[0]);
                return null;
            default:
                throw new InstantReloadException(String.format("String switch could not find '%s' with hashcode %s in %s", new Object[]{str, Integer.valueOf(str.hashCode()), "tb/lll"}));
        }
    }

    public void a(@NonNull MtopConfig mtopConfig) {
        IpChange ipChange = $ipChange;
        if (ipChange == null || !(ipChange instanceof IpChange)) {
            super.a(mtopConfig);
            final String c2 = c();
            try {
                SignStatistics.a(mtopConfig.uploadStats);
                long currentTimeMillis = System.currentTimeMillis();
                this.c = SecurityGuardManager.getInstance(this.a.context);
                b(StringUtils.isEmpty(mtopConfig.appKey) ? a(mtopConfig.appKeyIndex, b()) : mtopConfig.appKey, b());
                final Context context = this.a.context;
                MtopSDKThreadPoolExecutorFactory.submit(new Runnable() {
                    public static volatile transient /* synthetic */ IpChange $ipChange;

                    public void run() {
                        IpChange ipChange = $ipChange;
                        if (ipChange == null || !(ipChange instanceof IpChange)) {
                            try {
                                lll.this.a(context);
                            } catch (Throwable th) {
                                TBSdkLog.e("mtopsdk.InnerSignImpl", c2 + " [init]getAVMPInstance error when async init AVMP.", th);
                            }
                        } else {
                            ipChange.ipc$dispatch("run.()V", new Object[]{this});
                        }
                    }
                });
                b(mtopConfig);
                if (TBSdkLog.isLogEnable(TBSdkLog.LogEnable.InfoEnable)) {
                    TBSdkLog.i("mtopsdk.InnerSignImpl", c2 + " [init]ISign init SecurityGuard succeed.init time=" + (System.currentTimeMillis() - currentTimeMillis));
                }
            } catch (SecException e2) {
                int errorCode = e2.getErrorCode();
                SignStatistics.a(SignStatistics.SignStatsType.TYPE_SG_MANAGER, String.valueOf(errorCode), "");
                TBSdkLog.e("mtopsdk.InnerSignImpl", c2 + " [init]ISign init SecurityGuard error.errorCode=" + errorCode, (Throwable) e2);
            } catch (Exception e3) {
                TBSdkLog.e("mtopsdk.InnerSignImpl", c2 + " [init]ISign init SecurityGuard error.", (Throwable) e3);
            }
        } else {
            ipChange.ipc$dispatch("a.(Lmtopsdk/mtop/global/MtopConfig;)V", new Object[]{this, mtopConfig});
        }
    }

    private void b(String str, String str2) {
        IpChange ipChange = $ipChange;
        if (ipChange == null || !(ipChange instanceof IpChange)) {
            final String c2 = c();
            try {
                IUMIDComponent uMIDComp = this.c.getUMIDComp();
                if (uMIDComp != null) {
                    int a = a();
                    if (str2 == null) {
                        str2 = "";
                    }
                    uMIDComp.initUMID(str, a, str2, new IUMIDInitListenerEx() {
                        public static volatile transient /* synthetic */ IpChange $ipChange;

                        public void onUMIDInitFinishedEx(String token, int resultCode) {
                            IpChange ipChange = $ipChange;
                            if (ipChange != null && (ipChange instanceof IpChange)) {
                                ipChange.ipc$dispatch("onUMIDInitFinishedEx.(Ljava/lang/String;I)V", new Object[]{this, token, new Integer(resultCode)});
                            } else if (resultCode == 200) {
                                a.a(c2, "umt", token);
                                TBSdkLog.i("mtopsdk.InnerSignImpl", c2 + " [initUmidToken]IUMIDComponent initUMID succeed,UMID token=" + token);
                            } else {
                                TBSdkLog.w("mtopsdk.InnerSignImpl", c2 + " [initUmidToken]IUMIDComponent initUMID error,resultCode :" + resultCode);
                            }
                        }
                    });
                }
            } catch (SecException e2) {
                int errorCode = e2.getErrorCode();
                SignStatistics.a(SignStatistics.SignStatsType.TYPE_INIT_UMID, String.valueOf(errorCode), "");
                TBSdkLog.e("mtopsdk.InnerSignImpl", c2 + "[initUmidToken]IUMIDComponent initUMID error,errorCode=" + errorCode, (Throwable) e2);
            } catch (Exception e3) {
                TBSdkLog.e("mtopsdk.InnerSignImpl", c2 + "[initUmidToken]IUMIDComponent initUMID error.", (Throwable) e3);
            }
        } else {
            ipChange.ipc$dispatch("b.(Ljava/lang/String;Ljava/lang/String;)V", new Object[]{this, str, str2});
        }
    }

    public String a(llk.a aVar) {
        IpChange ipChange = $ipChange;
        if (ipChange != null && (ipChange instanceof IpChange)) {
            return (String) ipChange.ipc$dispatch("a.(Ltb/llk$a;)Ljava/lang/String;", new Object[]{this, aVar});
        } else if (aVar == null) {
            return null;
        } else {
            return a(aVar.a, aVar.b);
        }
    }

    public String a(HashMap<String, String> hashMap, String str, String str2) {
        String str3 = null;
        IpChange ipChange = $ipChange;
        if (ipChange == null || !(ipChange instanceof IpChange)) {
            String c2 = c();
            if (hashMap == null) {
                TBSdkLog.e("mtopsdk.InnerSignImpl", c2 + " [getMtopApiSign] params is null.appKey=" + str);
                return null;
            } else if (str == null) {
                hashMap.put("SG_ERROR_CODE", "AppKey is null");
                TBSdkLog.e("mtopsdk.InnerSignImpl", c2 + " [getMtopApiSign] AppKey is null.");
                return null;
            } else if (this.c == null) {
                hashMap.put("SG_ERROR_CODE", "SGManager is null");
                TBSdkLog.e("mtopsdk.InnerSignImpl", c2 + " [getMtopApiSign]SecurityGuardManager is null,please call ISign init()");
                return null;
            } else {
                try {
                    if ((SwitchConfig.getInstance().getUseSecurityAdapter() & 1) == 1) {
                        str3 = a(hashMap, str);
                    }
                    if (!StringUtils.isBlank(str3)) {
                        return str3;
                    }
                    SecurityGuardParamContext securityGuardParamContext = new SecurityGuardParamContext();
                    securityGuardParamContext.appKey = str;
                    securityGuardParamContext.requestType = 7;
                    Map<String, String> a = a((Map<String, String>) hashMap, str, false);
                    if (a != null && 2 == a()) {
                        a.put("ATLAS", "daily");
                    }
                    securityGuardParamContext.paramMap = a;
                    return this.c.getSecureSignatureComp().signRequest(securityGuardParamContext, str2);
                } catch (SecException e2) {
                    int errorCode = e2.getErrorCode();
                    SignStatistics.a(SignStatistics.SignStatsType.TYPE_SIGN_MTOP_REQUEST, String.valueOf(errorCode), "");
                    hashMap.put("SG_ERROR_CODE", String.valueOf(errorCode));
                    TBSdkLog.e("mtopsdk.InnerSignImpl", c2 + " [getMtopApiSign] ISecureSignatureComponent signRequest error,errorCode=" + errorCode, (Throwable) e2);
                    return null;
                } catch (Exception e3) {
                    TBSdkLog.e("mtopsdk.InnerSignImpl", c2 + " [getMtopApiSign] ISecureSignatureComponent signRequest error", (Throwable) e3);
                    return null;
                }
            }
        } else {
            return (String) ipChange.ipc$dispatch("a.(Ljava/util/HashMap;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;", new Object[]{this, hashMap, str, str2});
        }
    }

    public Map<String, String> a(Map<String, String> map, String str, boolean z) {
        IpChange ipChange = $ipChange;
        if (ipChange != null && (ipChange instanceof IpChange)) {
            return (Map) ipChange.ipc$dispatch("a.(Ljava/util/Map;Ljava/lang/String;Z)Ljava/util/Map;", new Object[]{this, map, str, new Boolean(z)});
        } else if (map == null || map.size() <= 0) {
            return null;
        } else {
            String str2 = map.get(HttpHeaderConstant.KEY_EXTDATA);
            String str3 = map.get(HttpHeaderConstant.X_FEATURES);
            String str4 = map.get("routerId");
            String str5 = map.get("placeId");
            String str6 = map.get("open-biz");
            String str7 = map.get("mini-appkey");
            String str8 = map.get("req-appkey");
            String str9 = map.get("accessToken");
            String str10 = map.get("open-biz-data");
            StringBuilder sb = new StringBuilder(64);
            sb.append(b.a(map.get("utdid"))).append("&");
            sb.append(b.a(map.get("uid"))).append("&");
            sb.append(b.a(map.get("reqbiz-ext"))).append("&");
            sb.append(str).append("&");
            sb.append(b.b(map.get("data"))).append("&");
            sb.append(map.get("t")).append("&");
            sb.append(map.get("api")).append("&");
            sb.append(map.get("v")).append("&");
            sb.append(b.a(map.get("sid"))).append("&");
            sb.append(b.a(map.get("ttid"))).append("&");
            sb.append(b.a(map.get("deviceId"))).append("&");
            sb.append(b.a(map.get(DispatchConstants.LATITUDE))).append("&");
            sb.append(b.a(map.get(DispatchConstants.LONGTITUDE))).append("&");
            if (z) {
                sb.append(b.a(str2)).append("&");
            } else if (StringUtils.isNotBlank(str2)) {
                sb.append(str2).append("&");
            }
            sb.append(str3).append("&");
            sb.append(b.a(str4)).append("&");
            sb.append(b.a(str5)).append("&");
            sb.append(b.a(str6)).append("&");
            sb.append(b.a(str7)).append("&");
            sb.append(b.a(str8)).append("&");
            sb.append(b.a(str9)).append("&");
            sb.append(b.a(str10));
            HashMap hashMap = new HashMap(2);
            hashMap.put("INPUT", sb.toString());
            return hashMap;
        }
    }

    public String a(String str, String str2) {
        IpChange ipChange = $ipChange;
        if (ipChange == null || !(ipChange instanceof IpChange)) {
            String c2 = c();
            if (str == null || str2 == null) {
                return null;
            }
            if (this.c == null) {
                TBSdkLog.e("mtopsdk.InnerSignImpl", c2 + " [getCommonHmacSha1Sign]SecurityGuardManager is null,please call ISign init()");
                return null;
            }
            try {
                HashMap hashMap = new HashMap(1);
                hashMap.put("INPUT", str);
                SecurityGuardParamContext securityGuardParamContext = new SecurityGuardParamContext();
                securityGuardParamContext.appKey = str2;
                securityGuardParamContext.requestType = 3;
                securityGuardParamContext.paramMap = hashMap;
                return this.c.getSecureSignatureComp().signRequest(securityGuardParamContext, b());
            } catch (SecException e2) {
                int errorCode = e2.getErrorCode();
                SignStatistics.a(SignStatistics.SignStatsType.TYPE_SIGN_HMAC_SHA1, String.valueOf(errorCode), "");
                TBSdkLog.e("mtopsdk.InnerSignImpl", c2 + " [getCommonHmacSha1Sign] ISecureSignatureComponent signRequest error,errorCode=" + errorCode, (Throwable) e2);
                return null;
            } catch (Exception e3) {
                TBSdkLog.e("mtopsdk.InnerSignImpl", c2 + " [getCommonHmacSha1Sign] ISecureSignatureComponent signRequest error", (Throwable) e3);
                return null;
            }
        } else {
            return (String) ipChange.ipc$dispatch("a.(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;", new Object[]{this, str, str2});
        }
    }

    public String a(String str, String str2, String str3, HashMap<String, String> hashMap, int i) {
        IpChange ipChange = $ipChange;
        if (ipChange == null || !(ipChange instanceof IpChange)) {
            try {
                return ((ISecurityBodyComponent) this.c.getInterface(ISecurityBodyComponent.class)).getSecurityBodyDataEx(str, str2, str3, hashMap, i, a());
            } catch (SecException e2) {
                SignStatistics.a(SignStatistics.SignStatsType.TYPE_GET_SECBODY, String.valueOf(e2.getErrorCode()), String.valueOf(i));
                TBSdkLog.e("mtopsdk.InnerSignImpl", c() + " [getSecBodyDataEx] ISecurityBodyComponent getSecurityBodyDataEx  error.errorCode=" + e2.getErrorCode() + ", flag=" + i, (Throwable) e2);
                return null;
            } catch (Exception e3) {
                TBSdkLog.e("mtopsdk.InnerSignImpl", c() + " [getSecBodyDataEx] ISecurityBodyComponent getSecurityBodyDataEx  error,flag=" + i, (Throwable) e3);
                return null;
            }
        } else {
            return (String) ipChange.ipc$dispatch("a.(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/util/HashMap;I)Ljava/lang/String;", new Object[]{this, str, str2, str3, hashMap, new Integer(i)});
        }
    }

    public String a(String str, String str2, int i) {
        IpChange ipChange = $ipChange;
        if (ipChange == null || !(ipChange instanceof IpChange)) {
            String a = a(str);
            if (!StringUtils.isBlank(a)) {
                return a;
            }
            TBSdkLog.e("mtopsdk.InnerSignImpl", c() + " [getAvmpSign] call avmpSign return null.degrade call getSecBodyDataEx ");
            return a("", "", str2, (HashMap<String, String>) null, i);
        }
        return (String) ipChange.ipc$dispatch("a.(Ljava/lang/String;Ljava/lang/String;I)Ljava/lang/String;", new Object[]{this, str, str2, new Integer(i)});
    }

    /* JADX DEBUG: Multi-variable search result rejected for TypeSearchVarInfo{r7v1, resolved type: java.lang.Object[]} */
    /* JADX WARNING: Multi-variable type inference failed */
    /* Code decompiled incorrectly, please refer to instructions dump. */
    private synchronized java.lang.String a(java.lang.String r11) {
        /*
            r10 = this;
            r3 = 0
            monitor-enter(r10)
            com.android.alibaba.ip.runtime.IpChange r0 = $ipChange     // Catch:{ all -> 0x00e6 }
            if (r0 == 0) goto L_0x001f
            boolean r1 = r0 instanceof com.android.alibaba.ip.runtime.IpChange     // Catch:{ all -> 0x00e6 }
            if (r1 == 0) goto L_0x001f
            java.lang.String r1 = "a.(Ljava/lang/String;)Ljava/lang/String;"
            r2 = 2
            java.lang.Object[] r2 = new java.lang.Object[r2]     // Catch:{ all -> 0x00e6 }
            r3 = 0
            r2[r3] = r10     // Catch:{ all -> 0x00e6 }
            r3 = 1
            r2[r3] = r11     // Catch:{ all -> 0x00e6 }
            java.lang.Object r0 = r0.ipc$dispatch(r1, r2)     // Catch:{ all -> 0x00e6 }
            java.lang.String r0 = (java.lang.String) r0     // Catch:{ all -> 0x00e6 }
            r2 = r0
        L_0x001d:
            monitor-exit(r10)
            return r2
        L_0x001f:
            r2 = 0
            java.lang.String r1 = ""
            r0 = 4
            byte[] r4 = new byte[r0]     // Catch:{ all -> 0x00e6 }
            if (r11 != 0) goto L_0x0049
            java.lang.String r11 = ""
            java.lang.String r0 = "mtopsdk.InnerSignImpl"
            java.lang.StringBuilder r5 = new java.lang.StringBuilder     // Catch:{ Exception -> 0x00a6 }
            r5.<init>()     // Catch:{ Exception -> 0x00a6 }
            java.lang.String r6 = r10.c()     // Catch:{ Exception -> 0x00a6 }
            java.lang.StringBuilder r5 = r5.append(r6)     // Catch:{ Exception -> 0x00a6 }
            java.lang.String r6 = " [avmpSign] input is null"
            java.lang.StringBuilder r5 = r5.append(r6)     // Catch:{ Exception -> 0x00a6 }
            java.lang.String r5 = r5.toString()     // Catch:{ Exception -> 0x00a6 }
            mtopsdk.common.util.TBSdkLog.e(r0, r5)     // Catch:{ Exception -> 0x00a6 }
        L_0x0049:
            mtopsdk.mtop.global.MtopConfig r0 = r10.a     // Catch:{ Exception -> 0x00a6 }
            if (r0 == 0) goto L_0x00a1
            mtopsdk.mtop.global.MtopConfig r0 = r10.a     // Catch:{ Exception -> 0x00a6 }
            android.content.Context r0 = r0.context     // Catch:{ Exception -> 0x00a6 }
        L_0x0051:
            com.alibaba.wireless.security.open.avmp.IAVMPGenericComponent$IAVMPGenericInstance r0 = r10.a((android.content.Context) r0)     // Catch:{ Exception -> 0x00a6 }
            if (r0 == 0) goto L_0x001d
            java.lang.String r5 = "sign"
            r6 = 0
            byte[] r6 = new byte[r6]     // Catch:{ Exception -> 0x00a6 }
            java.lang.Class r6 = r6.getClass()     // Catch:{ Exception -> 0x00a6 }
            r7 = 6
            java.lang.Object[] r7 = new java.lang.Object[r7]     // Catch:{ Exception -> 0x00a6 }
            r8 = 0
            r9 = 0
            java.lang.Integer r9 = java.lang.Integer.valueOf(r9)     // Catch:{ Exception -> 0x00a6 }
            r7[r8] = r9     // Catch:{ Exception -> 0x00a6 }
            r8 = 1
            byte[] r9 = r11.getBytes()     // Catch:{ Exception -> 0x00a6 }
            r7[r8] = r9     // Catch:{ Exception -> 0x00a6 }
            r8 = 2
            byte[] r9 = r11.getBytes()     // Catch:{ Exception -> 0x00a6 }
            int r9 = r9.length     // Catch:{ Exception -> 0x00a6 }
            java.lang.Integer r9 = java.lang.Integer.valueOf(r9)     // Catch:{ Exception -> 0x00a6 }
            r7[r8] = r9     // Catch:{ Exception -> 0x00a6 }
            r8 = 3
            r7[r8] = r1     // Catch:{ Exception -> 0x00a6 }
            r1 = 4
            r7[r1] = r4     // Catch:{ Exception -> 0x00a6 }
            r1 = 5
            int r8 = r10.a()     // Catch:{ Exception -> 0x00a6 }
            java.lang.Integer r8 = java.lang.Integer.valueOf(r8)     // Catch:{ Exception -> 0x00a6 }
            r7[r1] = r8     // Catch:{ Exception -> 0x00a6 }
            java.lang.Object r0 = r0.invokeAVMP(r5, r6, r7)     // Catch:{ Exception -> 0x00a6 }
            byte[] r0 = (byte[]) r0     // Catch:{ Exception -> 0x00a6 }
            if (r0 == 0) goto L_0x00ee
            java.lang.String r1 = new java.lang.String     // Catch:{ Exception -> 0x00a6 }
            r1.<init>(r0)     // Catch:{ Exception -> 0x00a6 }
            r0 = r1
        L_0x009e:
            r2 = r0
            goto L_0x001d
        L_0x00a1:
            android.content.Context r0 = mtopsdk.common.util.MtopUtils.getContext()     // Catch:{ Exception -> 0x00a6 }
            goto L_0x0051
        L_0x00a6:
            r0 = move-exception
            java.nio.ByteBuffer r1 = java.nio.ByteBuffer.wrap(r4)     // Catch:{ Throwable -> 0x00e9 }
            java.nio.ByteOrder r4 = java.nio.ByteOrder.LITTLE_ENDIAN     // Catch:{ Throwable -> 0x00e9 }
            java.nio.ByteBuffer r1 = r1.order(r4)     // Catch:{ Throwable -> 0x00e9 }
            int r1 = r1.getInt()     // Catch:{ Throwable -> 0x00e9 }
            java.lang.String r3 = "InvokeAVMP"
            java.lang.String r4 = java.lang.String.valueOf(r1)     // Catch:{ Throwable -> 0x00ec }
            java.lang.String r5 = ""
            mtopsdk.security.util.SignStatistics.a(r3, r4, r5)     // Catch:{ Throwable -> 0x00ec }
        L_0x00c2:
            java.lang.String r3 = "mtopsdk.InnerSignImpl"
            java.lang.StringBuilder r4 = new java.lang.StringBuilder     // Catch:{ all -> 0x00e6 }
            r4.<init>()     // Catch:{ all -> 0x00e6 }
            java.lang.String r5 = r10.c()     // Catch:{ all -> 0x00e6 }
            java.lang.StringBuilder r4 = r4.append(r5)     // Catch:{ all -> 0x00e6 }
            java.lang.String r5 = " [avmpSign] call avmpInstance.invokeAVMP error.errorCode="
            java.lang.StringBuilder r4 = r4.append(r5)     // Catch:{ all -> 0x00e6 }
            java.lang.StringBuilder r1 = r4.append(r1)     // Catch:{ all -> 0x00e6 }
            java.lang.String r1 = r1.toString()     // Catch:{ all -> 0x00e6 }
            mtopsdk.common.util.TBSdkLog.e((java.lang.String) r3, (java.lang.String) r1, (java.lang.Throwable) r0)     // Catch:{ all -> 0x00e6 }
            goto L_0x001d
        L_0x00e6:
            r0 = move-exception
            monitor-exit(r10)
            throw r0
        L_0x00e9:
            r1 = move-exception
            r1 = r3
            goto L_0x00c2
        L_0x00ec:
            r3 = move-exception
            goto L_0x00c2
        L_0x00ee:
            r0 = r2
            goto L_0x009e
        */
        throw new UnsupportedOperationException("Method not decompiled: tb.lll.a(java.lang.String):java.lang.String");
    }

    public IAVMPGenericComponent.IAVMPGenericInstance a(@NonNull Context context) {
        IpChange ipChange = $ipChange;
        if (ipChange == null || !(ipChange instanceof IpChange)) {
            if (this.d == null) {
                synchronized (lll.class) {
                    if (this.d == null) {
                        try {
                            this.d = ((IAVMPGenericComponent) SecurityGuardManager.getInstance(context).getInterface(IAVMPGenericComponent.class)).createAVMPInstance("mwua", "sgcipher");
                            if (this.d == null) {
                                TBSdkLog.e("mtopsdk.InnerSignImpl", c() + " [getAVMPInstance] call createAVMPInstance return null.");
                            }
                        } catch (SecException e2) {
                            int errorCode = e2.getErrorCode();
                            SignStatistics.a(SignStatistics.SignStatsType.TYPE_AVMP_INSTANCE, String.valueOf(errorCode), "");
                            TBSdkLog.e("mtopsdk.InnerSignImpl", c() + " [getAVMPInstance] call createAVMPInstance error,errorCode=" + errorCode, (Throwable) e2);
                        } catch (Exception e3) {
                            TBSdkLog.e("mtopsdk.InnerSignImpl", c() + " [getAVMPInstance] call createAVMPInstance error.", (Throwable) e3);
                        }
                    }
                }
            }
            return this.d;
        }
        return (IAVMPGenericComponent.IAVMPGenericInstance) ipChange.ipc$dispatch("a.(Landroid/content/Context;)Lcom/alibaba/wireless/security/open/avmp/IAVMPGenericComponent$IAVMPGenericInstance;", new Object[]{this, context});
    }

    private String a(int i, String str) {
        String str2;
        SecException e2;
        Exception e3;
        IpChange ipChange = $ipChange;
        if (ipChange == null || !(ipChange instanceof IpChange)) {
            String c2 = c();
            try {
                str2 = this.c.getStaticDataStoreComp().getAppKeyByIndex(i, str);
                try {
                    if (!TBSdkLog.isLogEnable(TBSdkLog.LogEnable.InfoEnable)) {
                        return str2;
                    }
                    TBSdkLog.i("mtopsdk.InnerSignImpl", c2 + " [getAppKeyByIndex]getAppKeyByIndex  appKey=" + str2 + ",appKeyIndex=" + i + ",authCode=" + str);
                    return str2;
                } catch (SecException e4) {
                    e2 = e4;
                    int errorCode = e2.getErrorCode();
                    SignStatistics.a(SignStatistics.SignStatsType.TYPE_GET_APPKEY, String.valueOf(errorCode), "");
                    TBSdkLog.e("mtopsdk.InnerSignImpl", c2 + " [getAppKeyByIndex]getAppKeyByIndex error.errorCode=" + errorCode + ",appKeyIndex=" + i + ",authCode=" + str, (Throwable) e2);
                    return str2;
                } catch (Exception e5) {
                    e3 = e5;
                    TBSdkLog.e("mtopsdk.InnerSignImpl", c2 + " [getAppKeyByIndex]getAppKeyByIndex error.appKeyIndex=" + i + ",authCode=" + str, (Throwable) e3);
                    return str2;
                }
            } catch (SecException e6) {
                SecException secException = e6;
                str2 = null;
                e2 = secException;
            } catch (Exception e7) {
                Exception exc = e7;
                str2 = null;
                e3 = exc;
                TBSdkLog.e("mtopsdk.InnerSignImpl", c2 + " [getAppKeyByIndex]getAppKeyByIndex error.appKeyIndex=" + i + ",authCode=" + str, (Throwable) e3);
                return str2;
            }
        } else {
            return (String) ipChange.ipc$dispatch("a.(ILjava/lang/String;)Ljava/lang/String;", new Object[]{this, new Integer(i), str});
        }
    }

    private void b(MtopConfig mtopConfig) {
        IpChange ipChange = $ipChange;
        if (ipChange != null && (ipChange instanceof IpChange)) {
            ipChange.ipc$dispatch("b.(Lmtopsdk/mtop/global/MtopConfig;)V", new Object[]{this, mtopConfig});
        } else if (mtopConfig != null) {
            try {
                long currentTimeMillis = System.currentTimeMillis();
                HashMap hashMap = new HashMap();
                hashMap.put(AlipayConstant.LOGIN_ALIPAY_AUTH_CODE_KEY, b());
                if (this.e == null) {
                    this.e = (IMiddleTierGenericComponent) SecurityGuardManager.getInstance(mtopConfig.context).getInterface(IMiddleTierGenericComponent.class);
                    if (this.e != null && !this.e.init(hashMap) && TBSdkLog.isLogEnable(TBSdkLog.LogEnable.InfoEnable)) {
                        TBSdkLog.e("mtopsdk.InnerSignImpl", c() + " [initMiddleTier]init middle tier failed");
                    }
                }
                HashMap hashMap2 = new HashMap();
                hashMap2.put("authCode", b());
                if (this.f == null) {
                    this.f = (IUnifiedSecurityComponent) SecurityGuardManager.getInstance(mtopConfig.context).getInterface(IUnifiedSecurityComponent.class);
                    if (this.f != null) {
                        this.f.init(hashMap2);
                    } else if (TBSdkLog.isLogEnable(TBSdkLog.LogEnable.InfoEnable)) {
                        TBSdkLog.e("mtopsdk.InnerSignImpl", c() + " [initMiddleTier]init sign failed");
                    }
                }
                HashMap hashMap3 = new HashMap();
                hashMap3.put("key_login_module", Boolean.valueOf(f.a(mtopConfig.mtopInstance) != null));
                IFCComponent iFCComponent = (IFCComponent) SecurityGuardManager.getInstance(mtopConfig.context).getInterface(IFCComponent.class);
                if (iFCComponent != null) {
                    iFCComponent.setUp(mtopConfig.context, hashMap3);
                    mtopConfig.mtopGlobalHeaders.put("x-bx-version", iFCComponent.getFCPluginVersion());
                }
                TBSdkLog.e("mtopsdk.InnerSignImpl", "[initMiddleTier] execute initMiddleTier cost time ", String.valueOf(System.currentTimeMillis() - currentTimeMillis));
            } catch (SecException e2) {
                TBSdkLog.e("mtopsdk.InnerSignImpl", c() + " [initMiddleTier]init middleTier failed with errorCode " + e2.getErrorCode() + ",appKeyIndex=" + mtopConfig.appKeyIndex + ",authCode=" + mtopConfig.authCode, (Throwable) e2);
            } catch (Exception e3) {
                TBSdkLog.e("mtopsdk.InnerSignImpl", c() + " [initMiddleTier]init middleTier failed with unknown exception, appKeyIndex=" + mtopConfig.appKeyIndex + ",authCode=" + mtopConfig.authCode, (Throwable) e3);
            }
        }
    }

    public String a(HashMap<String, String> hashMap, String str) {
        String str2;
        UnsupportedEncodingException e2;
        SecException e3;
        IpChange ipChange = $ipChange;
        if (ipChange == null || !(ipChange instanceof IpChange)) {
            String str3 = a((Map<String, String>) hashMap, str, false).get("INPUT");
            try {
                if (this.e == null || StringUtils.isBlank(str3)) {
                    TBSdkLog.e("mtopsdk.InnerSignImpl", c() + " [getSign]middleTier null or data data ", "appKeyIndex=" + this.a.appKeyIndex + ",authCode=" + this.a.authCode);
                    return "";
                }
                HashMap hashMap2 = new HashMap();
                hashMap2.put("data", str3.getBytes("UTF-8"));
                hashMap2.put("env", Integer.valueOf(d()));
                hashMap2.put("appkey", str);
                HashMap<String, String> sign = this.e.getSign(hashMap2);
                if (sign == null || sign.isEmpty()) {
                    TBSdkLog.e("mtopsdk.InnerSignImpl", c() + " [getSign]get sign failed with no output ", "appKeyIndex=" + this.a.appKeyIndex + ",authCode=" + this.a.authCode);
                    return "";
                }
                str2 = sign.remove(HttpHeaderConstant.X_SIGN);
                try {
                    if (!StringUtils.isNotBlank(str2)) {
                        return str2;
                    }
                    hashMap.putAll(sign);
                    return str2;
                } catch (UnsupportedEncodingException e4) {
                    e2 = e4;
                    TBSdkLog.e("mtopsdk.InnerSignImpl", c() + " [getSign]your input data transfer to byte utf-8 failed ", "appKeyIndex=" + this.a.appKeyIndex + ",authCode=" + this.a.authCode, e2);
                    return str2;
                } catch (SecException e5) {
                    e3 = e5;
                    TBSdkLog.e("mtopsdk.InnerSignImpl", c() + " [getSign]get sign failed and SecException errorCode " + e3.getErrorCode() + ",appKeyIndex=" + this.a.appKeyIndex + ",authCode=" + this.a.authCode, (Throwable) e3);
                    return str2;
                }
            } catch (UnsupportedEncodingException e6) {
                UnsupportedEncodingException unsupportedEncodingException = e6;
                str2 = "";
                e2 = unsupportedEncodingException;
                TBSdkLog.e("mtopsdk.InnerSignImpl", c() + " [getSign]your input data transfer to byte utf-8 failed ", "appKeyIndex=" + this.a.appKeyIndex + ",authCode=" + this.a.authCode, e2);
                return str2;
            } catch (SecException e7) {
                SecException secException = e7;
                str2 = "";
                e3 = secException;
                TBSdkLog.e("mtopsdk.InnerSignImpl", c() + " [getSign]get sign failed and SecException errorCode " + e3.getErrorCode() + ",appKeyIndex=" + this.a.appKeyIndex + ",authCode=" + this.a.authCode, (Throwable) e3);
                return str2;
            }
        } else {
            return (String) ipChange.ipc$dispatch("a.(Ljava/util/HashMap;Ljava/lang/String;)Ljava/lang/String;", new Object[]{this, hashMap, str});
        }
    }

    public String b(HashMap<String, String> hashMap, String str) {
        String str2;
        UnsupportedEncodingException e2;
        SecException e3;
        IpChange ipChange = $ipChange;
        if (ipChange == null || !(ipChange instanceof IpChange)) {
            String str3 = hashMap.get("sign");
            try {
                if (this.e == null || StringUtils.isBlank(str3)) {
                    TBSdkLog.e("mtopsdk.InnerSignImpl", c() + " [getWua]middleTier null or data data ", "appKeyIndex=" + this.a.appKeyIndex + ",authCode=" + this.a.authCode);
                    return "";
                }
                HashMap hashMap2 = new HashMap();
                hashMap2.put("data", str3.getBytes("UTF-8"));
                hashMap2.put("env", Integer.valueOf(d()));
                HashMap<String, String> wua = this.e.getWua(hashMap2);
                if (wua == null || wua.isEmpty()) {
                    TBSdkLog.e("mtopsdk.InnerSignImpl", c() + " [getWua]get wua failed with no output ", "appKeyIndex=" + this.a.appKeyIndex + ",authCode=" + this.a.authCode);
                    return "";
                }
                str2 = wua.remove(kzw.KEY_WUA);
                try {
                    if (!StringUtils.isNotBlank(str2)) {
                        return str2;
                    }
                    hashMap.putAll(wua);
                    return str2;
                } catch (UnsupportedEncodingException e4) {
                    e2 = e4;
                    TBSdkLog.e("mtopsdk.InnerSignImpl", c() + " [getWua]your input data transfer to byte utf-8 failed ", "appKeyIndex=" + this.a.appKeyIndex + ",authCode=" + this.a.authCode, e2);
                    return str2;
                } catch (SecException e5) {
                    e3 = e5;
                    TBSdkLog.e("mtopsdk.InnerSignImpl", c() + " [getWua]get wua failed and SecException errorCode " + e3.getErrorCode() + ",appKeyIndex=" + this.a.appKeyIndex + ",authCode=" + this.a.authCode, (Throwable) e3);
                    return str2;
                }
            } catch (UnsupportedEncodingException e6) {
                UnsupportedEncodingException unsupportedEncodingException = e6;
                str2 = "";
                e2 = unsupportedEncodingException;
                TBSdkLog.e("mtopsdk.InnerSignImpl", c() + " [getWua]your input data transfer to byte utf-8 failed ", "appKeyIndex=" + this.a.appKeyIndex + ",authCode=" + this.a.authCode, e2);
                return str2;
            } catch (SecException e7) {
                SecException secException = e7;
                str2 = "";
                e3 = secException;
                TBSdkLog.e("mtopsdk.InnerSignImpl", c() + " [getWua]get wua failed and SecException errorCode " + e3.getErrorCode() + ",appKeyIndex=" + this.a.appKeyIndex + ",authCode=" + this.a.authCode, (Throwable) e3);
                return str2;
            }
        } else {
            return (String) ipChange.ipc$dispatch("b.(Ljava/util/HashMap;Ljava/lang/String;)Ljava/lang/String;", new Object[]{this, hashMap, str});
        }
    }

    public String a(HashMap<String, String> hashMap, HashMap<String, String> hashMap2) {
        String str;
        SecException e2;
        IpChange ipChange = $ipChange;
        if (ipChange == null || !(ipChange instanceof IpChange)) {
            try {
                if (this.e == null) {
                    TBSdkLog.e("mtopsdk.InnerSignImpl", c() + " [getMiniWua]middleTier ", "appKeyIndex=" + this.a.appKeyIndex + ",authCode=" + this.a.authCode);
                    return "";
                }
                HashMap hashMap3 = new HashMap();
                hashMap3.put("env", Integer.valueOf(d()));
                if (hashMap2 == null) {
                    hashMap2 = new HashMap<>();
                }
                hashMap2.put("api_name", hashMap.get("api"));
                hashMap3.put("extend_paras", hashMap2);
                HashMap<String, String> miniWua = this.e.getMiniWua(hashMap3);
                if (miniWua == null || miniWua.isEmpty()) {
                    TBSdkLog.e("mtopsdk.InnerSignImpl", c() + " [getMiniWua]get miniwua failed with no output ", "appKeyIndex=" + this.a.appKeyIndex + ",authCode=" + this.a.authCode);
                    return "";
                }
                str = miniWua.remove("x-miniwua");
                try {
                    if (!StringUtils.isNotBlank(str)) {
                        return str;
                    }
                    hashMap.putAll(miniWua);
                    return str;
                } catch (SecException e3) {
                    e2 = e3;
                    TBSdkLog.e("mtopsdk.InnerSignImpl", c() + " [getMiniWua]get miniwua failed and SecException errorCode " + e2.getErrorCode() + ",appKeyIndex=" + this.a.appKeyIndex + ",authCode=" + this.a.authCode, (Throwable) e2);
                    return str;
                }
            } catch (SecException e4) {
                SecException secException = e4;
                str = "";
                e2 = secException;
                TBSdkLog.e("mtopsdk.InnerSignImpl", c() + " [getMiniWua]get miniwua failed and SecException errorCode " + e2.getErrorCode() + ",appKeyIndex=" + this.a.appKeyIndex + ",authCode=" + this.a.authCode, (Throwable) e2);
                return str;
            }
        } else {
            return (String) ipChange.ipc$dispatch("a.(Ljava/util/HashMap;Ljava/util/HashMap;)Ljava/lang/String;", new Object[]{this, hashMap, hashMap2});
        }
    }

    public HashMap<String, String> a(HashMap<String, String> hashMap, HashMap<String, String> hashMap2, String str, String str2, boolean z) {
        IpChange ipChange = $ipChange;
        if (ipChange == null || !(ipChange instanceof IpChange)) {
            String c2 = c();
            if (str == null) {
                hashMap.put("SG_ERROR_CODE", "AppKey is null");
                TBSdkLog.e("mtopsdk.InnerSignImpl", c2 + " [getUnifiedSign] AppKey is null.");
                return null;
            } else if (hashMap == null) {
                TBSdkLog.e("mtopsdk.InnerSignImpl", c2 + " [getUnifiedSign] params is null.appKey=" + str);
                return null;
            } else if (this.f == null) {
                hashMap.put("SG_ERROR_CODE", "unified is null");
                TBSdkLog.e("mtopsdk.InnerSignImpl", c2 + " [getUnifiedSign]sg unified sign is null, please call ISign init()");
                return null;
            } else {
                try {
                    HashMap hashMap3 = new HashMap();
                    String str3 = a((Map<String, String>) hashMap, str, true).get("INPUT");
                    if (StringUtils.isBlank(str3)) {
                        TBSdkLog.e("mtopsdk.InnerSignImpl", c() + " [getUnifiedSign]get sign failed with sign data empty ", "appKeyIndex=" + this.a.appKeyIndex + ",authCode=" + this.a.authCode);
                        return null;
                    }
                    hashMap3.put("appkey", str);
                    hashMap3.put("data", str3);
                    hashMap3.put("useWua", Boolean.valueOf(z));
                    hashMap3.put("env", Integer.valueOf(d()));
                    hashMap3.put("authCode", str2);
                    hashMap3.put("extendParas", hashMap2);
                    hashMap3.put("api", hashMap.get("api"));
                    HashMap<String, String> securityFactors = this.f.getSecurityFactors(hashMap3);
                    if (securityFactors != null && !securityFactors.isEmpty()) {
                        return securityFactors;
                    }
                    TBSdkLog.e("mtopsdk.InnerSignImpl", c() + " [getUnifiedSign]get sign failed with no output ", "appKeyIndex=" + this.a.appKeyIndex + ",authCode=" + this.a.authCode);
                    return null;
                } catch (SecException e2) {
                    TBSdkLog.e("mtopsdk.InnerSignImpl", c() + " [getUnifiedSign]get sign failed and SecException errorCode " + e2.getErrorCode() + ",appKeyIndex=" + this.a.appKeyIndex + ",authCode=" + this.a.authCode, (Throwable) e2);
                    return null;
                } catch (Throwable th) {
                    TBSdkLog.e("mtopsdk.InnerSignImpl", c() + " [getUnifiedSign]get sign failed exception ,appKeyIndex=" + this.a.appKeyIndex + ",authCode=" + this.a.authCode, th);
                    return null;
                }
            }
        } else {
            return (HashMap) ipChange.ipc$dispatch("a.(Ljava/util/HashMap;Ljava/util/HashMap;Ljava/lang/String;Ljava/lang/String;Z)Ljava/util/HashMap;", new Object[]{this, hashMap, hashMap2, str, str2, new Boolean(z)});
        }
    }

    private int d() {
        IpChange ipChange = $ipChange;
        if (ipChange != null && (ipChange instanceof IpChange)) {
            return ((Number) ipChange.ipc$dispatch("d.()I", new Object[]{this})).intValue();
        } else if (a() != EnvModeEnum.PREPARE.getEnvMode()) {
            return (a() == EnvModeEnum.TEST.getEnvMode() || a() == EnvModeEnum.TEST_SANDBOX.getEnvMode()) ? 2 : 0;
        } else {
            return 1;
        }
    }
}