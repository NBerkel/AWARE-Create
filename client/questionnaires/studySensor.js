Template.studySensor.onCreated(function () {
  var self = this;
  // self.autorun(function () {
  //   var id = FlowRouter.getParam('id');
  //   self.subscribe('singleStudy', id);
  // });

  SEO.set({
    title: "AWARE Create - Sensor data"
  });
});

AutoForm.addHooks(null, {
  before: {
    update: function (doc) {
      _.each(doc.$set, function (value, setter) {
        if (_.isArray(value)) {
          var newValue = _.compact(value);
          doc.$set[setter] = newValue;
        }
      });
      return doc;
    }
  }
});

AutoForm.addHooks("updateSensors", {
  onSuccess: function (formType, result) {
    FlowRouter.go("/study/overview");
  }
});

Template.studySensor.helpers({
  append(string1, string2) {
    return string1 + '.' + string2;
  },
  study: () => {
    const id = Session.get('studyId');
    return Studies.findOne({ _id: id });
  },
  updateStudyId: function () {
    const id = Session.get('studyId');
    return Studies.findOne({ _id: id });
  }
});
