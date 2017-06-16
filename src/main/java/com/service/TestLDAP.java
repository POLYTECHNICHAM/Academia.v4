package com.service;
import com.Entities.Login;
import com.Entities.Person;
import com.ldap.LDAPAccess;
import com.ldap.LDAPObject;

public class TestLDAP
{
	public static LDAPObject IsepApi(Login login) {
    LDAPAccess access = new LDAPAccess();
    //Enter login and password Here
    String pseudo = login.getLogin();
    String mdp = login.getMdp();
    LDAPObject test = null;
    try {
      test = access.LDAPget(pseudo, mdp);
    } catch (Exception e) {
      e.printStackTrace();
    }
    if (test == null) {
      System.out.println("login invalide");
      return null;
    }
    System.out.println(test.toString());
    return test;

  }
}
