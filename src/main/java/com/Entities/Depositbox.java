package com.Entities;

import javax.persistence.*;
import java.util.Collection;

/**
 * Created by hicham on 31/05/2017.
 */
@Entity
public class Depositbox {
  private int id;
  private String limitDate;
  private String title;
  private Collection<Document> documentsById;

  @Id
  @Column(name = "id", nullable = false)
  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  @Basic
  @Column(name = "limitDate", nullable = true, length = 45)
  public String getLimitDate() {
    return limitDate;
  }

  public void setLimitDate(String limitDate) {
    this.limitDate = limitDate;
  }

  @Basic
  @Column(name = "title", nullable = true, length = 45)
  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  @OneToMany(mappedBy = "depositboxByDepositBoxId")
  public Collection<Document> getDocumentsById() {
    return documentsById;
  }

  public void setDocumentsById(Collection<Document> documentsById) {
    this.documentsById = documentsById;
  }
}
