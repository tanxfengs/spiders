package com.duapp.aesjni;

import android.util.Log;

public class AESEncrypt {
    static {
        try {
            System.loadLibrary("JNIEncrypt");
        } catch (UnsatisfiedLinkError e2) {
            e2.fillInStackTrace();
            Log.e("JNI", "loadJNI fail " + e2.getMessage());
        }
    }

    public static String a(Object obj, String str) {
        String byteValues = getByteValues();
        StringBuilder sb = new StringBuilder(byteValues.length());
        for (int i = 0; i < byteValues.length(); i++) {
            if (byteValues.charAt(i) == '0') {
                sb.append('1');
            } else {
                sb.append('0');
            }
        }
        return decodeByte(obj, str, sb.toString());
    }

    public static String b(Object obj, String str) {
        String byteValues = getByteValues();
        StringBuilder sb = new StringBuilder(byteValues.length());
        for (int i = 0; i < byteValues.length(); i++) {
            if (byteValues.charAt(i) == '0') {
                sb.append('1');
            } else {
                sb.append('0');
            }
        }
        return encodeByte(str.getBytes(), sb.toString());
    }

    public static native int checkSignature(Object obj);

    public static native String decodeByte(Object obj, String str, String str2);

    public static native String encodeByte(byte[] bArr, String str);

    public static native String getByteValues();

    public static native String getLeanCloudAppID();

    public static native String getLeanCloudAppKey();

    public static native String getWxAppId(Object obj);

    public static native String getWxAppKey();

    public static String a(String str) {
        String byteValues = getByteValues();
        StringBuilder sb = new StringBuilder(byteValues.length());
        for (int i = 0; i < byteValues.length(); i++) {
            if (byteValues.charAt(i) == '0') {
                sb.append('1');
            } else {
                sb.append('0');
            }
        }
        return encodeByte(str.getBytes(), sb.toString());
    }
}