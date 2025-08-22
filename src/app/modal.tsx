'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export function ModalContent() {
  const [dialogState, setDialogState] = useState('initial');
  const [applied, setApplied] = useState('');
  const [emailed, setEmailed] = useState('');
  const [interviewed, setInterviewed] = useState('');
  const [cancelReason, setCancelReason] = useState('');
  const [jobMigrateMate, setJobMigrateMate] = useState('');
  const [companyLawyer, setCompanyLawyer] = useState('');

  if (dialogState === 'initial') {
    return (
      <section className="text-start px-6 py-8">
        <h1 className="text-2xl font-bold text-gray-900">Hey mate,</h1>
        <h1 className="text-2xl font-bold text-gray-900">Quick one before you go.</h1>
        <p>&nbsp;</p>
        <h1 className="text-2xl font-bold text-gray-900"><em>Have you found a job yet?</em></h1>
        <p>&nbsp;</p>
        <p>Whatever your answer, we just want to help you take the next step.  With visa support, or by hearing how we can do better.</p>
        <hr className="mt-4" />
        <button
          onClick={() => {
            console.log('Cancel button click ed - no action');
            setDialogState("yesJob");
          }}
          className="inline-flex mt-4 items-center justify-center w-full px-4 py-3 bg-white border rounded-lg hover:bg-red-50 hover:border-red-300 transition-all duration-200 shadow-sm group"
        >
          <span className="text-sm font-medium">Yes, I've found a job</span>
        </button>
        <button
          onClick={() => {
            console.log('Cancel button click ed - no action');
            setDialogState("noJob");
          }}
          className="inline-flex mt-4 items-center justify-center w-full px-4 py-3 bg-white border rounded-lg hover:bg-red-50 hover:border-red-300 transition-all duration-200 shadow-sm group"
        >
          <span className="text-sm font-medium">Not yet I'm still looking</span>
        </button>
      </section>
    );
  } else if (dialogState === 'noJob' || dialogState === 'yesJob') {
    return (
      <section className="text-start px-6 py-8">
        <h1 className="text-2xl font-bold text-gray-900">{dialogState === 'noJob' ? "Help us understand how you were using Migrate Mate." : "Congrats on the new role!"}</h1>
        <div className={dialogState === 'noJob' ? "hidden" : ""}>
          <p>Did you find this job with Migrate Mate?*</p>
          <div
            className="flex gap-2" 
            onChange={(e) => {
              console.log("loo");
              setJobMigrateMate(e.target.value);
            }}
          >
            <input name="jobMigrateMate" id="jmmYes" value="Yes" type="radio" style={{  opacity: 0,position: "fixed",width: 0}} />
            <label htmlFor="jmmYes"  className={"flex-auto rounded-md text-center " + (jobMigrateMate === "Yes" ? "bg-[#8952fc] text-white" : "bg-gray-100") }>Yes</label>

            <input name="jobMigrateMate" id="jmmNo" value="No" type="radio" style={{  opacity: 0,position: "fixed",width: 0}} />
            <label htmlFor="jmmNo"  className={"flex-auto rounded-md text-center " + (jobMigrateMate === "No" ? "bg-[#8952fc] text-white" : "bg-gray-100") }>No</label>
        </div>
        </div>
        <p>How many roles did you <span className="underline decoration-solid">apply</span> for through Migrate Mate?</p>
        <div
          className="flex gap-2" 
          onChange={(e) => {
            console.log("loo");
            setApplied(e.target.value);
          }}
        >
          <input name="apply" id="apply0" value="0" type="radio" style={{  opacity: 0,position: "fixed",width: 0}} />
          <label htmlFor="apply0"  className={"flex-auto rounded-md text-center " + (applied === "0" ? "bg-[#8952fc] text-white" : "bg-gray-100") }>0</label>

          <input name="apply" id="apply1-5" value="1-5" type="radio" style={{  opacity: 0,position: "fixed",width: 0}} />
          <label htmlFor="apply1-5"  className={"flex-auto rounded-md text-center " + (applied === "1-5" ? "bg-[#8952fc] text-white" : "bg-gray-100") }>1-5</label>

          <input name="apply" id="apply6-20" value="6-20" type="radio" style={{  opacity: 0,position: "fixed",width: 0}} />
          <label htmlFor="apply6-20"  className={"flex-auto rounded-md text-center " + (applied === "6-20" ? "bg-[#8952fc] text-white" : "bg-gray-100") }>6-20</label>

          <input name="apply" id="apply20+" value="20+" type="radio" style={{  opacity: 0,position: "fixed",width: 0}} />
          <label htmlFor="apply20+"  className={"flex-auto rounded-md text-center " + (applied === "20+" ? "bg-[#8952fc] text-white" : "bg-gray-100") }>20+</label>
        </div>
        <p>How many companies did you <span className="underline decoration-solid">email</span> directly</p>
        <div
          className="flex gap-2" 
          onChange={(e) => {
            console.log("zoo");
            setEmailed(e.target.value);
          }}
        >
          <input name="email" id="email0" value="0" type="radio" style={{  opacity: 0,position: "fixed",width: 0}} />
          <label htmlFor="email0"  className={"flex-auto rounded-md text-center " + (emailed === "0" ? "bg-[#8952fc] text-white" : "bg-gray-100") }>0</label>

          <input name="email" id="email1-5" value="1-5" type="radio" style={{  opacity: 0,position: "fixed",width: 0}} />
          <label htmlFor="email1-5"  className={"flex-auto rounded-md text-center " + (emailed === "1-5" ? "bg-[#8952fc] text-white" : "bg-gray-100") }>1-5</label>

          <input name="email" id="email6-20" value="6-20" type="radio" style={{  opacity: 0,position: "fixed",width: 0}} />
          <label htmlFor="email6-20"  className={"flex-auto rounded-md text-center " + (emailed === "6-20" ? "bg-[#8952fc] text-white" : "bg-gray-100") }>6-20</label>

          <input name="email" id="email20+" value="20+" type="radio" style={{  opacity: 0,position: "fixed",width: 0}} />
          <label htmlFor="email20+"  className={"flex-auto rounded-md text-center " + (emailed === "20+" ? "bg-[#8952fc] text-white" : "bg-gray-100") }>20+</label>
        </div>
        <p>How many different companies did you <span className="underline decoration-solid">interview</span> with?</p>
        <div 
          className="flex gap-2"
          onChange={(e) => {
            console.log("aoo");
            setInterviewed(e.target.value);
          }}
        >
          <input name="interview" id="interview0" value="0" type="radio" style={{  opacity: 0,position: "fixed",width: 0}} />
          <label htmlFor="interview0"  className={"flex-auto rounded-md text-center " + (interviewed === "0" ? "bg-[#8952fc] text-white" : "bg-gray-100") }>0</label>

          <input name="interview" id="interview1-2" value="1-2" type="radio" style={{  opacity: 0,position: "fixed",width: 0}} />
          <label htmlFor="interview1-2"  className={"flex-auto rounded-md text-center " + (interviewed === "1-2" ? "bg-[#8952fc] text-white" : "bg-gray-100") }>1-2</label>

          <input name="interview" id="interview3-5" value="3-5" type="radio" style={{  opacity: 0,position: "fixed",width: 0}} />
          <label htmlFor="interview3-5"  className={"flex-auto rounded-md text-center " + (interviewed === "3-5" ? "bg-[#8952fc] text-white" : "bg-gray-100") }>3-5</label>

          <input name="interview" id="interview5+" value="5+" type="radio" style={{  opacity: 0,position: "fixed",width: 0}} />
          <label htmlFor="interview5+"  className={"flex-auto rounded-md text-center " + (interviewed === "5+" ? "bg-[#8952fc] text-white" : "bg-gray-100") }>5+</label>
        </div>
        <button
          disabled={(dialogState === 'yesJob' && !jobMigrateMate) || !interviewed || !emailed || !applied}
          onClick={() => {
            console.log('Cancel button click ed - no action');
            setDialogState("mainReason");
          }}
          className={"inline-flex mt-4 items-center justify-center w-full px-4 py-3 border rounded-lg transition-all duration-200 shadow-sm group " + ((dialogState === 'yesJob' && !jobMigrateMate) || !interviewed || !emailed || !applied ? "bg-gray-200" : "bg-red-500 text-white")}
        >
          <span className="text-sm font-medium">Continue</span>
        </button>
      </section>
    );
  } else if (dialogState === "mainReason") {
    return (
      <section className="text-start px-6 py-8">
        <div className={jobMigrateMate === '' ? '' : 'hidden'}>
          <h1 className="text-2xl font-bold text-gray-900">What&rsquo;s the main reason for cancelling?</h1>
          <p>Please take a minute to let us know why:</p>
          <p>&nbsp;</p>
          <p className="text-red-500">To help us understand your experience, please select a reason for cancelling*</p>
          <div onChange={(e) => {
            console.log("zoo");
            setCancelReason(e.target.value);
          }}>
            <div className={cancelReason === '' || cancelReason === "tooExpensive" ? '' : 'hidden'}>
              <input name="cancelReason" id="cancelExpensive" value="tooExpensive" type="radio"></input>
              <label htmlFor='cancelExpensive'>Too Expensive</label>
            </div>
            <div className={cancelReason === '' || cancelReason === "platformNotHellpful" ? '' : 'hidden'}>
              <input name="cancelReason" id="cancelUnhelpful" value="platformNotHellpful" type="radio"></input>
              <label htmlFor='cancelUnhelpful'>Platform not hellpful</label>
            </div>
            <div className={cancelReason === '' || cancelReason === "notEnoughRelevantJobs" ? '' : 'hidden'}>
              <input name="cancelReason" id="cancelJobs" value="notEnoughRelevantJobs" type="radio"></input>
              <label htmlFor="cancelJobs">Not enough relevant jobs</label>
            </div>
            <div className={cancelReason === '' || cancelReason === "decidedNotToMove" ? '' : 'hidden'}>
              <input name="cancelReason" id="cancelNoMove" value="decidedNotToMove" type="radio"></input>
              <label htmlFor='cancelNoMove'>Decided not to move</label>
            </div>
            <div className={cancelReason === '' || cancelReason === "other" ? '' : 'hidden'}>
              <input name="cancelReason" id="cancelOther" value="other" type="radio"></input>
              <label htmlFor='cancelOther'>Other</label>
            </div>
          </div>
          <div className={cancelReason === "tooExpensive" ? '' : 'hidden'}>
              <p>What would be the maximum you would be willing to pay?</p>
              <input type="text" className="border border-solid"/> 
          </div>
          <div className={cancelReason === "platformNotHellpful" ? '' : 'hidden'}>
            <p>What can we do to make the platform more helpful?*</p>
            <p className='text-red-500'>Please enter at least 25 characters so we can understand your feedback*</p>
            <textarea></textarea>
          </div>
          <div className={cancelReason === "notEnoughRelevantJobs" ? '' : 'hidden'}>
            <p>In which way can we make the jobs more relevant?*</p>
            <textarea></textarea>
          </div>
          <div className={cancelReason === "decidedNotToMove" ? '' : 'hidden'}>
            <p>What changed for you to decide not to move?*</p>
            <textarea></textarea>
          </div>
          <div className={cancelReason === "other" ? '' : 'hidden'}>
            <p>What would have helped you the most?*</p>
            <textarea className="block border border-solid"></textarea>
          </div>
          <button
            disabled={!cancelReason}
            className={"inline-flex mt-4 items-center justify-center w-full px-4 py-3 border rounded-lg transition-all duration-200 shadow-sm group " + (!cancelReason ? "bg-gray-200" : "bg-red-500 text-white")}
            onClick={() => {
              console.log('Cancel button click ed - no action');
              setDialogState("finishedCancel");
            }}
          >
            Complete cancelation
          </button>
        </div>
        <div className={jobMigrateMate === '' ? 'hidden' : ''}>
          <h1 className="text-2xl font-bold text-gray-900">What&rsquo;s one thing you wish we could&rsquo;ve helped you with?</h1>
          <p>&nbsp;</p>
          <p>We&rsquo;re always looking to improve, your thought can help us make Migrate Matye more useful for others.*</p>
          <p>&nbsp;</p>
          <textarea className='block border border-solid'></textarea>
          <button
            disabled={false}
            className={"inline-flex mt-4 items-center justify-center w-full px-4 py-3 border rounded-lg transition-all duration-200 shadow-sm group " + (false ? "bg-gray-200" : "bg-red-500 text-white")} 
            onClick={() => {
              console.log('Cancel button click ed - no action');
              setDialogState("checkVisa");
            }}
          >Continue</button>
        </div>
      </section>
    );
  } else if(dialogState === "checkVisa") {
    return (
      <section className="text-start px-6 py-8">
        <h1 className="text-2xl font-bold text-gray-900">
          {jobMigrateMate === "Yes" ? "We helped you land the job, now let's help you secure your visa." : "You landed the job!"}
        </h1>
        <h1 className={jobMigrateMate === "No" ? '' : "hidden"}><em>That's what we live for.</em></h1>
        <h2 className="text-xl font-bold text-gray-900">Even if it wasn't through Migrate Mate,</h2>
        <h2 className="text-xl font-bold text-gray-900">let us help get your visa sorted.</h2>
        <p>Is your company providing an immigratrion lawyer to help with your visa?</p>
        <div onChange={(e) => {
            console.log("zoo");
            setCompanyLawyer(e.target.value);
        }}>
          <div className={companyLawyer === 'Yes' || companyLawyer === '' ? '' : 'hidden'}>
            <input name="companyLawyer" id="companyLawyerYes" value="Yes" type="radio"></input>
            <label htmlFor='companyLawyerYes'>Yes</label>
          </div>
          <div className={companyLawyer === 'No' || companyLawyer === '' ? '' : 'hidden'}>
            <input name="companyLawyer" id="companyLawyerNo" value="No" type="radio"></input>
            <label htmlFor='companyLawyerNo'>No</label>
          </div>
        </div>
        <p className={companyLawyer === 'Yes' ? '' : 'hidden'}>What visa will you be applying for?</p>
        <div className={companyLawyer === 'No' ? '' : 'hidden'}>
          <p>We can connect you with one of our trusted partners.</p>
          <p>Which visa would you like to apply for?*</p>
        </div>
        <textarea className={"border border-solid block " + (companyLawyer === '' ? 'hidden' : '')}></textarea>
        <button
          disabled={!companyLawyer}
          className={"inline-flex mt-4 items-center justify-center w-full px-4 py-3 border rounded-lg transition-all duration-200 shadow-sm group " + (!companyLawyer ? "bg-gray-200" : "bg-red-500 text-white")}
          onClick={() => {
            console.log('Cancel button click ed - no action');
            supabase
                .from('subscriptions')
                .update({ status: 'pending_cancellation' })
                .eq('id', 'ebd23602-329f-459c-9679-e8ec0e815128');
            setDialogState("finishedCancel");
          }}
        >
          Complete cancelation
        </button>
      </section>
    );
  } else if(dialogState === "finishedCancel") {
    return (
      <section className="text-start px-6 py-8">
        <div className={jobMigrateMate === ''  ? '' : 'hidden'}>
          <h1 className="text-2xl font-bold text-gray-900">Sorry to see you go, mate.</h1>
          <h2 className="text-xl font-bold text-gray-900">Thanks for being with us, and you're always welcom back.</h2>
          <p>Your subscription is set to end on XX date.</p>
          <p>You'll still have full access until then.  No further charges after that.</p>
          <p>&nbsp;</p>
          <p>Changed your mind?  You can reactivate anytime before your end date.</p>
        </div>
        <div className={companyLawyer === 'Yes' ? '' : 'hidden'}>
          <h1 className="text-2xl font-bold text-gray-900">All done, your cancellation's been processed.</h1>
          <h2 className="text-xl font-bold text-gray-900">We're stoked to hear you've landed a job and sorted your visa. Big congrats from the team.</h2>
          <p>Your subscription is set to end on XX date.</p>
        </div>
        <div className={companyLawyer === 'No' ? '' : 'hidden'}>
            <h1 className="text-2xl font-bold text-gray-900">Your cancellation's all sorted, mate, no more charges.</h1>
            <div className="bg-gray-200">
              <p><strong>Mihailo Bozic</strong></p>
              <p>&lt;mihalio@migratemate.co&gt;</p>
              <p><strong>I'll be reaching out soon to help with the visa side of things.</strong></p>
              <p>We've got your back, whether it's questions, paperwork, or just figuring out your optyions.</p>
              <p>Keep an eye on your inbodx, I'll be in touch <span className="underline">shortly</span>.</p>
            </div>
        </div>
        <button
            onClick={() => {
              console.log('Cancel button click ed - no action');
            }}
            className="inline-flex mt-4 items-center justify-center w-full px-4 py-3 border rounded-lg transition-all duration-200 shadow-sm group bg-[#8952fc] text-white"
          >
            <span className="text-sm font-medium">{companyLawyer === '' ? 'Back to Jobs' : 'Finish'}</span>
          </button>
      </section>
    );
  }
  return (
    <section>
      <p>foo {dialogState}</p>
    </section>
  );
  
}