const { prisma } = require("../prismaClient.js")

const AboutData = async (req, res) => {
	try {
		const data = await prisma.about.findMany();
		if(data){
			res.json({status: "success", data: data});
		}
	} catch (err) {
		console.log("About Data : ", err);
	}
}


const skillData = async (req, res) => {
	try {
		const data = await prisma.skills.findMany();
		if(data){
			res.json({status: "success", data: data});
		}
	} catch (err) {
		console.log("Skills Data : ", err);
	}
}


const educationData = async (req, res) => {
	try {
		const data = await prisma.education.findMany({
            include: {
                education_subject: {
                    include: {
                        subjects: true,
                    },
                },
            },
        });
		if(data){
			res.json({status: "success", data: data});
		}
	} catch (err) {
		console.log("Education Data : ", err);
	}
}

const projectData = async (req, res) => {
	try {
		const data = await prisma.projects.findMany({
            include: {
                project_skill: {
                    include: {
                        skills: true,
                    },
                },
            },
        });
		if(data){
			res.json({status: "success", data: data});
		}
	} catch (err) {
		console.log("Project Data : ", err);
	}
}




module.exports = { AboutData, skillData, educationData, projectData }