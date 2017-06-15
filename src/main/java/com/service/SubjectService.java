package com.service;

import com.Entities.Subject;
import com.Entities.Team;
import com.repository.SubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;


@Service
@Transactional
public class SubjectService {

    @Autowired
    private SubjectRepository subjectRepository;

    public List<Subject> retreiveAllSubjects(){
        List<Subject> subjectList = new ArrayList<>();
        subjectRepository.findAll().forEach(subjectList::add);

        return subjectList;
    }

    public void createSubject(Subject subject){
        subjectRepository.save(subject);
    }

    public void updateSubject(Subject subject){
        subjectRepository.save(subject);
    }

    public Subject getSubject(Team team){
      return subjectRepository.findSubjectsByTeamByTeamId(team);
    }

    public Integer getSubjectId(String subjectTitle){
      Subject subject = subjectRepository.findSubjectsByTitleLike(subjectTitle);
      Integer subjectId = subject.getId();
      return subjectId;
    }

    public void updateSubjects(ArrayList<Subject> subjects){
      for (Subject oneSubject : subjects) {
        subjectRepository.save(oneSubject);
      }
    }
    public void addTeamInSubject(Team team, Integer subjectId){

    }

    public void deleteSubject(Integer id_subject){
        subjectRepository.delete(id_subject);
    }
}
