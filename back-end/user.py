from firebase import Firebase
from flask import Blueprint, request, jsonify, json, session, g
from staticData import connDict
import mysql.connector
from functools import wraps
from staticData import fireBaseConfig
from initApp import get_db_conn

# firebase = Firebase(fireBaseConfig)
# auth = firebase.auth()


def get_auth():
    if not hasattr(g, "auth") or not hasattr(g, "myfirebase"):
        g.myfirebase = Firebase(fireBaseConfig)
        g.auth = g.myfirebase.auth()
    return g.auth


# user = auth.get_account_info('eyJhbGciOiJSUzI1NiIsImtpZCI6IjdkNTU0ZjBjMTJjNjQ3MGZiMTg1MmY3OWRiZjY0ZjhjODQzYmIxZDciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYWNocmFpdXQiLCJhdWQiOiJhY2hyYWl1dCIsImF1dGhfdGltZSI6MTU5MzMwMjA1OCwidXNlcl9pZCI6Ijh6YUVmaXhuMzdXN3M5UlNWRGJQV25obmU3RTMiLCJzdWIiOiI4emFFZml4bjM3VzdzOVJTVkRiUFduaG5lN0UzIiwiaWF0IjoxNTkzMzAyNDAzLCJleHAiOjE1OTMzMDYwMDMsImVtYWlsIjoiamFjb3ZAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImphY292QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Dj0x0hCHqft96OwlTJ1MAGxhFvO_eBAoLyP7KC2d7LKKR-zb7RXGfu2ZdOwUk-NuKedqUdPNz5kHrimvlLxPCUge4euhLjFp5OAio0dB3hFqdiF9hkqXzTkfohStbNDSkiDwodqMM7H6ZiNI5flb43we488_p-ARcy_3b2vlmKu8fEgBH5sYFj0xe9g_t4-684XIoU4CPVOXAxDr4XJ27EcnsEnpzYfffv9I5yBhDHbmJGcuUcY_A-pBc7UhYx71iik45LPCwIcII6wTccytYNrDGcZBEAdQMCia2gUwXHJ1zkJbslmXO-leyD6nPnlk28TTp1qW-gq6cXtw406I1A')
# user = auth.get_account_info(
#     'eyJhbGciOiJSUzI1NiIsImtpZCI6IjdkNTU0ZjBjMTJjNjQ3MGZiMTg1MmY3OWRiZjY0ZjhjODQzYmIxZDciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYWNocmFpdXQiLCJhdWQiOiJhY2hyYWl1dCIsImF1dGhfdGltZSI6MTU5MzM0NDU5NSwidXNlcl9pZCI6IlNTR013SVozeEtPVmtyT0ptb0RBSkVlOW8wVzIiLCJzdWIiOiJTU0dNd0laM3hLT1Zrck9KbW9EQUpFZTlvMFcyIiwiaWF0IjoxNTkzMzQ0NTk1LCJleHAiOjE1OTMzNDgxOTUsImVtYWlsIjoiakBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiakBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.fdODptReZ_w09KZyUVemnENrNT5pSueX57QQPz7wylwXDzzMfmOt47YRg85vOx0k2rM3N5WdWoAudxGkCtK3MLfU2VsSP3Jdu4niUkTJFtDHmZ7feoIPVeotlFcl_GjEkfpNuRN_28Qs-oPSVUVeGBPlxKNKhSPdcNyaSj9tnuoyly4fcsdgWxY3QMAcYtYMaJR-IjLDoQrjNerLsIyaS2U6AxoWU8rQe9kxd_Bua8dxRHlmaDNiXrJHGbvQW7i869buAY8ubeXUb3afkagCNpLHQ21y79eWF2nwBe71OWQKIyu0t2wTTjJU9ZrryoMXQ3lWxRIEjqYefNDqLfsKKQ')
# newUser = auth.create_user_with_email_and_password('jaccc@gmail.com', '123456')
# user = auth.sign_in_with_email_and_password('jac@gmail.com', '123456')
a = 3


def get_user_firebase(tokenId):
    try:
        user = get_auth().get_account_info(tokenId)["users"][0]
        if not user:
            return None
    except:
        return None
    localId = user["localId"]
    return user, localId


def is_user_admin(tokenId):
    try:
        user = get_auth().get_account_info(tokenId)["users"][0]
        if not user:
            return None
    except:
        return None
    localId = user["localId"]
    return isUserAdmin(localId)


# def login_required(f):
#     @wraps(f)
#     def decorated_function(*args, **kwargs):
#         user = dict(session).get('profile', None)
#         # You would add a check here and usethe user id or something to fetch
#         # the other data for that user/check if they exist
#         if user:
#             return f(*args, **kwargs)
#         return 'You aint logged in, no page for u!'
#     return decorated_function


def add_new_user_in_local_db(user_name, user_first_name, user_last_name, conn):
    # ._open_connection()
    cursor = get_db_conn().cursor()
    try:
        cursor.callproc("add_new_user", (user_name, user_first_name, user_last_name))
    except Exception as e:
        return 0
    return 1


def initial_user_golas_or_habits():
    # conn._open_connection()
    cursor = get_db_conn().cursor()
    initUserStatment = """ Insert into goals_or_habits(user_name, goals_selected, max_goals, goals_wined) values("binyamin", 0, 0, 0) ;"""
    try:
        cursor.execute(initUserStatment)
        get_db_conn().commit()
    except Exception as e:
        return "error", 500
    # finally:
    #     conn.close()
    return "ok", 200


def user_exists(user):
    # conn._open_connection()
    sql = "select exists(select *  from user where user.user_name = %s);"
    # sql = "select *  from user where user.user_name = %s;"
    cursor = get_db_conn().cursor()
    try:
        cursor.execute(sql, (user,))
        row = cursor.fetchone()
        a = 444
    except Exception as e:
        return -1
    return row[0]


def isUserAdmin(user):
    sql = "select is_admin from user where user_name = %s;"
    cursor = get_db_conn().cursor()
    try:
        cursor.execute(sql, (user,))
        row = cursor.fetchone()
        a = 444
    except Exception as e:
        return 0
    return row[0]