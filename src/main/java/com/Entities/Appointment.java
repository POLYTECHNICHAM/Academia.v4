package com.Entities;

import javax.persistence.*;
import java.util.Collection;

/**
 * Created by hicham on 31/05/2017.
 */
@Entity
public class Appointment {
  private int id;
  private String dateA;
  private String hStart;
  private String hEnd;
  private String remark;
  private String deliveredTools;
  private Byte typeAppointment;
  private Team teamByTeamId;
  private Person personByPersonId;
  private Collection<Feature> featuresById;

  @Id
  @Column(name = "id", nullable = false)
  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  @Basic
  @Column(name = "dateA", nullable = true, length = 45)
  public String getDateA() {
    return dateA;
  }

  public void setDateA(String dateA) {
    this.dateA = dateA;
  }

  @Basic
  @Column(name = "hStart", nullable = true, length = 45)
  public String gethStart() {
    return hStart;
  }

  public void sethStart(String hStart) {
    this.hStart = hStart;
  }

  @Basic
  @Column(name = "hEnd", nullable = true, length = 45)
  public String gethEnd() {
    return hEnd;
  }

  public void sethEnd(String hEnd) {
    this.hEnd = hEnd;
  }

  @Basic
  @Column(name = "remark", nullable = true, length = -1)
  public String getRemark() {
    return remark;
  }

  public void setRemark(String remark) {
    this.remark = remark;
  }

  @Basic
  @Column(name = "DeliveredTools", nullable = true, length = 45)
  public String getDeliveredTools() {
    return deliveredTools;
  }

  public void setDeliveredTools(String deliveredTools) {
    this.deliveredTools = deliveredTools;
  }

  @Basic
  @Column(name = "typeAppointment", nullable = true)
  public Byte getTypeAppointment() {
    return typeAppointment;
  }

  public void setTypeAppointment(Byte typeAppointment) {
    this.typeAppointment = typeAppointment;
  }

  @ManyToOne
  @JoinColumn(name = "Team_id", referencedColumnName = "id")
  //@JsonManagedReference(value = "appoi-teamByTeamId")

  public Team getTeamByTeamId() {
    return teamByTeamId;
  }

  public void setTeamByTeamId(Team teamByTeamId) {
    this.teamByTeamId = teamByTeamId;
  }

  @ManyToOne
  @JoinColumn(name = "Person_id", referencedColumnName = "id")
  public Person getPersonByPersonId() {
    return personByPersonId;
  }

  public void setPersonByPersonId(Person personByPersonId) {
    this.personByPersonId = personByPersonId;
  }

  @OneToMany(mappedBy = "appointmentByAppointmentId")
  public Collection<Feature> getFeaturesById() {
    return featuresById;
  }

  public void setFeaturesById(Collection<Feature> featuresById) {
    this.featuresById = featuresById;
  }
}
