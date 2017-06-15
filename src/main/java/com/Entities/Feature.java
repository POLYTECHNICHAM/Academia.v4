package com.Entities;

import javax.persistence.*;

/**
 * Created by hicham on 31/05/2017.
 */
@Entity
public class Feature {
  private int id;
  private String content;
  private Byte state;
  private String typePerson;
  private String name;
  private Byte acceptFeature;
  private Subject subjectBySubjectId;
  private Team teamByTeamId;
  private Appointment appointmentByAppointmentId;

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
  @Column(name = "state", nullable = true)
  public Byte getState() {
    return state;
  }

  public void setState(Byte state) {
    this.state = state;
  }

  @Basic
  @Column(name = "typePerson", nullable = true, length = 45)
  public String getTypePerson() {
    return typePerson;
  }

  public void setTypePerson(String typePerson) {
    this.typePerson = typePerson;
  }

  @Basic
  @Column(name = "name", nullable = true, length = 45)
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  @ManyToOne
  @JoinColumn(name = "Subject_id", referencedColumnName = "id")
  public Subject getSubjectBySubjectId() {
    return subjectBySubjectId;
  }

  public void setSubjectBySubjectId(Subject subjectBySubjectId) {
    this.subjectBySubjectId = subjectBySubjectId;
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
  @JoinColumn(name = "Appointment_id", referencedColumnName = "id")
  public Appointment getAppointmentByAppointmentId() {
    return appointmentByAppointmentId;
  }

  public void setAppointmentByAppointmentId(Appointment appointmentByAppointmentId) {
    this.appointmentByAppointmentId = appointmentByAppointmentId;
  }
}
