package com.Entities;

import javax.persistence.*;

/**
 * Created by hicham on 31/05/2017.
 */
@Entity
public class Wallcom {
  private int id;
  private String content;
  private String dateMessage;
  private String hourMessage;
  private Wallmessage wallmessageByWallMessageId;
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

  @ManyToOne
  @JoinColumn(name = "wallMessage_id", referencedColumnName = "id")
  public Wallmessage getWallmessageByWallMessageId() {
    return wallmessageByWallMessageId;
  }

  public void setWallmessageByWallMessageId(Wallmessage wallmessageByWallMessageId) {
    this.wallmessageByWallMessageId = wallmessageByWallMessageId;
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
