package com.repository;

import com.Entities.Appointment;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AppointmentRepository extends CrudRepository<Appointment,Integer> {

  Appointment findOneById(int id);

  List<Appointment> findAllByTeamByTeamId_Id(int idTeam);

}
