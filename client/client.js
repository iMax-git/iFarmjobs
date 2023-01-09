console.log("----- iFarmjobs | Client.js -----");

Config.Jobs.forEach(async (job) => {
    var job = new Job(job.name, job.location, job.salary, job.animation, job.animation2,job.tool, job.blip_sprite, job.blip_color, job.marker_type, job.marker_color);
    await job.init();
});

