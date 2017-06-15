package com.Entities;

import javax.persistence.*;
import java.util.Collection;

/**
 * Created by conte on 16/05/2017.
 */
public class Login {
  private String login;
  private String mdp;

  public String getLogin() {
    return login;
  }

  public void setLogin(String login) {
    this.login = login;
  }

  public String getMdp() {
    return mdp;
  }

  public void setMdp(String mdp) {
    this.mdp = mdp;
  }

}
