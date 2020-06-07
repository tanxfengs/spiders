package com.shizhuang.duapp.common.utils;

import android.app.Activity;
import android.content.Context;
import b.b.a.b.h.h;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.duapp.aesjni.AESEncrypt;
import com.meituan.robust.ChangeQuickRedirect;
import com.meituan.robust.PatchProxy;
import com.meituan.robust.PatchProxyResult;
import com.meizu.cloud.pushsdk.notification.model.NotifyType;
import com.shizhuang.duapp.common.base.BaseApplication;
import com.shizhuang.duapp.common.config.SCConstant;
import com.shizhuang.duapp.common.helper.HPDeviceInfo;
import com.shizhuang.duapp.framework.util.encrypt.MD5Util;
import com.shizhuang.duapp.libs.dulogger.DuLogger;
import com.shizhuang.duapp.libs.dulogger.Printer;
import com.shizhuang.duapp.modules.router.ServiceManager;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Map;

public class RequestUtils {

    /* renamed from: a  reason: collision with root package name */
    public static final String f42474a = "RequestUtils";
    public static ChangeQuickRedirect changeQuickRedirect;

    public static String a(Map<String, String> map) {
        PatchProxyResult proxy = PatchProxy.proxy(new Object[]{map}, (Object) null, changeQuickRedirect, true, 5342, new Class[]{Map.class}, String.class);
        if (proxy.isSupported) {
            return (String) proxy.result;
        }
        if (map == null) {
            return "";
        }
        map.put("uuid", HPDeviceInfo.b(BaseApplication.d()).a((Activity) null));
        map.put("platform", "android");
        map.put(NotifyType.VIBRATE, HPDeviceInfo.a((Context) BaseApplication.d()));
        map.put("loginToken", ServiceManager.a().a());
        ArrayList arrayList = new ArrayList(map.entrySet());
        Collections.sort(arrayList, h.f36000a);
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < arrayList.size(); i++) {
            Map.Entry entry = (Map.Entry) arrayList.get(i);
            sb.append(((String) entry.getKey()) + ((String) entry.getValue()));
        }
        sb.append(SCConstant.k);
        return MD5Util.a(sb.toString());
    }

    public static synchronized String b(Map<String, String> map, long j) throws UnsupportedEncodingException {
        synchronized (RequestUtils.class) {
            Object[] objArr = {map, new Long(j)};
            ChangeQuickRedirect changeQuickRedirect2 = changeQuickRedirect;
            PatchProxyResult proxy = PatchProxy.proxy(objArr, (Object) null, changeQuickRedirect2, true, 5343, new Class[]{Map.class, Long.TYPE}, String.class);
            if (proxy.isSupported) {
                String str = (String) proxy.result;
                return str;
            } else if (map == null) {
                return "";
            } else {
                map.put("uuid", HPDeviceInfo.b(BaseApplication.d()).a((Activity) null));
                map.put("platform", "android");
                map.put(NotifyType.VIBRATE, HPDeviceInfo.a((Context) BaseApplication.d()));
                map.put("loginToken", ServiceManager.a().a());
                map.put("timestamp", String.valueOf(j));
                ArrayList arrayList = new ArrayList(map.entrySet());
                Collections.sort(arrayList, new Comparator<Map.Entry<String, String>>() {
                    public static ChangeQuickRedirect changeQuickRedirect;

                    /* renamed from: a */
                    public int compare(Map.Entry<String, String> entry, Map.Entry<String, String> entry2) {
                        PatchProxyResult proxy = PatchProxy.proxy(new Object[]{entry, entry2}, this, changeQuickRedirect, false, 5346, new Class[]{Map.Entry.class, Map.Entry.class}, Integer.TYPE);
                        return proxy.isSupported ? ((Integer) proxy.result).intValue() : entry.getKey().toString().compareTo(entry2.getKey());
                    }
                });
                StringBuilder sb = new StringBuilder();
                for (int i = 0; i < arrayList.size(); i++) {
                    Map.Entry entry = (Map.Entry) arrayList.get(i);
                    sb.append(((String) entry.getKey()) + ((String) entry.getValue()));
                }
                String sb2 = sb.toString();
                Printer b2 = DuLogger.b(f42474a);
                b2.a((Object) "StringToSign " + sb2);
                String a2 = MD5Util.a(AESEncrypt.b(BaseApplication.d(), sb2));
                return a2;
            }
        }
    }

    public static /* synthetic */ int a(Map.Entry entry, Map.Entry entry2) {
        PatchProxyResult proxy = PatchProxy.proxy(new Object[]{entry, entry2}, (Object) null, changeQuickRedirect, true, 5345, new Class[]{Map.Entry.class, Map.Entry.class}, Integer.TYPE);
        return proxy.isSupported ? ((Integer) proxy.result).intValue() : ((String) entry.getKey()).compareTo((String) entry2.getKey());
    }

    public static synchronized String a(Map<String, Object> map, long j) {
        synchronized (RequestUtils.class) {
            PatchProxyResult proxy = PatchProxy.proxy(new Object[]{map, new Long(j)}, (Object) null, changeQuickRedirect, true, 5344, new Class[]{Map.class, Long.TYPE}, String.class);
            if (proxy.isSupported) {
                String str = (String) proxy.result;
                return str;
            } else if (map == null) {
                return "";
            } else {
                map.put("uuid", HPDeviceInfo.b(BaseApplication.d()).a((Activity) null));
                map.put("platform", "android");
                map.put(NotifyType.VIBRATE, HPDeviceInfo.a((Context) BaseApplication.d()));
                map.put("loginToken", ServiceManager.a().a());
                map.put("timestamp", String.valueOf(j));
                StringBuilder sb = new StringBuilder();
                for (Map.Entry next : map.entrySet()) {
                    sb.append((String) next.getKey());
                    if (next.getValue() instanceof String) {
                        sb.append(next.getValue());
                    } else {
                        Object json = JSON.toJSON(next.getValue());
                        if (json instanceof JSONArray) {
                            JSONArray jSONArray = (JSONArray) json;
                            for (int i = 0; i < jSONArray.size(); i++) {
                                if (jSONArray.get(i) instanceof String) {
                                    sb.append(jSONArray.get(i));
                                } else {
                                    sb.append(JSON.toJSONString(jSONArray.get(i)));
                                }
                                if (i != jSONArray.size() - 1) {
                                    sb.append(",");
                                }
                            }
                        } else {
                            sb.append(JSON.toJSONString(json));
                        }
                    }
                }
                String sb2 = sb.toString();
                Printer b2 = DuLogger.b(f42474a);
                b2.a((Object) "StringToSign-body " + sb2);
                String a2 = MD5Util.a(AESEncrypt.b(BaseApplication.d(), sb2));
                return a2;
            }
        }
    }
}