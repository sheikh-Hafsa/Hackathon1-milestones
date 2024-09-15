var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
//listing element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _this = this;
    var _a;
    event.preventDefault();
    //Get reference to form elements using their IDS
    var profilepictureInput = document.getElementById('profile picture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var linkedInElement = document.getElementById('linkedIn');
    var AcademicQualificationElement = document.getElementById('Academic Qualification');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var AchievementsElement = document.getElementById('Achievements');
    //check if all form elements are present
    if (profilepictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        linkedInElement &&
        AcademicQualificationElement &&
        experienceElement &&
        skillsElement &&
        AchievementsElement) {
        //get value from form
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var linkedIn = linkedInElement.value;
        var AcademicQualification = AcademicQualificationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var Achievements = AchievementsElement.value;
        //picture elements
        var profilepicturefile = (_a = profilepictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilepictureURL = profilepicturefile ? URL.createObjectURL(profilepicturefile) : "";
        //create resume output
        var resumeHTML = "\n    <h2>Resume</h2>\n    ".concat(profilepictureURL ? "<img src=\"".concat(profilepictureURL, "\" alt=\"profile picture\" class=\"profilepicture\">") : '', "\n    <p><strong>Name:</strong>").concat(name_1, "</p>\n    <p><strong>Email:</strong>").concat(email, "</p>\n    <p><strong>Phone:</strong>").concat(phone, "</p>\n     <p><strong>linkedIn:</strong>").concat(linkedIn, "</p>\n\n    <h3>Academic Qualification</h3> \n    <p>").concat(AcademicQualification, "</p>\n\n    <h3>Experience</h3> \n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3> \n    <p>").concat(skills, "</p>\n\n    <h3>Achievements</h3> \n    <p>").concat(Achievements, "</p>\n    ");
        //display the resume into the output container
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeHTML;
            resumeOutputElement.classList.remove('hidden');
            //create  container for buttons
            var buttonsContainer = document.createElement('div');
            buttonsContainer.id = "buttonsContainer";
            resumeOutputElement.appendChild(buttonsContainer);
            //add download pdf button
            var downloadButton = document.createElement('button');
            downloadButton.textContent = "download as PDF";
            downloadButton.addEventListener("click", function () {
                window.print();
            });
            buttonsContainer.appendChild(downloadButton);
            //add shareable link button
            var shareLinkButton = document.createElement('button');
            shareLinkButton.textContent = 'copy shareable Link';
            shareLinkButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                var shareableLink, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            shareableLink = "https://yourdomain.com/resumes/".concat(name_1.replace(/\s+/g, "_"), "_cv.html");
                            //use clipbboard
                            return [4 /*yield*/, navigator.clipboard.writeText(shareableLink)];
                        case 1:
                            //use clipbboard
                            _a.sent();
                            alert("shareable Link copied to clipboard!");
                            return [3 /*break*/, 3];
                        case 2:
                            err_1 = _a.sent();
                            console.error("failed to copied link:", err_1);
                            alert("failed to copy link to clipboard. please try again.");
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            buttonsContainer.appendChild(shareLinkButton);
        }
        else {
            console.error("resume output container not found");
        }
    }
    else {
        console.error("form elements are missing");
    }
});
