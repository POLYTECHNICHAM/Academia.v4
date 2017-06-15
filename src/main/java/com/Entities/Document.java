package com.Entities;

import javax.persistence.*;

/**
 * Created by hicham on 31/05/2017.
 */
@Entity
public class Document {
  private int id;
  private String depoDate;
  private String path;
  private Team teamByTeamId;
  private Depositbox depositboxByDepositBoxId;

  @Id
  @Column(name = "id", nullable = false)
  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  @Basic
  @Column(name = "depoDate", nullable = true, length = 45)
  public String getDepoDate() {
    return depoDate;
  }

  public void setDepoDate(String depoDate) {
    this.depoDate = depoDate;
  }

  @Basic
  @Column(name = "path", nullable = true, length = 45)
  public String getPath() {
    return path;
  }

  public void setPath(String path) {
    this.path = path;
  }

  @ManyToOne
  @JoinColumn(name = "Team_id", referencedColumnName = "id")
  public Team getTeamByTeamId() {
    return teamByTeamId;
  }

  public void setTeamByTeamId(Team teamByTeamId) {
    this.teamByTeamId = teamByTeamId;
  }

  @ManyToOne
  @JoinColumn(name = "DepositBox_id", referencedColumnName = "id")
  public Depositbox getDepositboxByDepositBoxId() {
    return depositboxByDepositBoxId;
  }

  public void setDepositboxByDepositBoxId(Depositbox depositboxByDepositBoxId) {
    this.depositboxByDepositBoxId = depositboxByDepositBoxId;
  }
}
