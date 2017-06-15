package com.Entities;

import javax.persistence.*;
import java.util.Collection;

/**
 * Created by hicham on 31/05/2017.
 */
@Entity
public class Wallmessage {
  private int id;
  private String content;
  private String dateMessage;
  private String hourMessage;
  private Collection<Wallcom> wallcomsById;
  private Person personByPersonId;

  @Id
  @Column(name = "id", nullable = false)
  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  @Basic
  @Column(name = "content", nullable = true, length = -1)
  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  @Basic
  @Column(name = "dateMessage", nullable = true, length = 45)
  public String getDateMessage() {
    return dateMessage;
  }

  public void setDateMessage(String dateMessage) {
    this.dateMessage = dateMessage;
  }

  @Basic
  @Column(name = "hourMessage", nullable = true, length = 45)
  public String getHourMessage() {
    return hourMessage;
  }

  public void setHourMessage(String hourMessage) {
    this.hourMessage = hourMessage;
  }

  @OneToMany(mappedBy = "wallmessageByWallMessageId")
  public Collection<Wallcom> getWallcomsById() {
    return wallcomsById;
  }

  public void setWallcomsById(Collection<Wallcom> wallcomsById) {
    this.wallcomsById = wallcomsById;
  }

  @ManyToOne
  @JoinColumn(name = "Person_id", referencedColumnName = "id")
  public Person getPersonByPersonId() {
    return personByPersonId;
  }

  public void setPersonByPersonId(Person personByPersonId) {
    this.personByPersonId = personByPersonId;
  }
}
